import { compare } from 'bcrypt-ts';
import NextAuth, { type DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import { createGuestUser, getUser, upsertOAuthUser } from '@/lib/db/queries';
import { authConfig } from './auth.config';
import { DUMMY_PASSWORD } from '@/lib/constants';
import type { DefaultJWT } from 'next-auth/jwt';

export type UserType = 'guest' | 'regular';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      type: UserType;
    } & DefaultSession['user'];
  }

  interface User {
    id?: string;
    email?: string | null;
    type: UserType;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    type: UserType;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // Credentials({
    //   credentials: {},
    //   async authorize({ email, password }: any) {
    //     const users = await getUser(email);

    //     if (users.length === 0) {
    //       await compare(password, DUMMY_PASSWORD);
    //       return null;
    //     }

    //     const [user] = users;

    //     if (!user.password) {
    //       await compare(password, DUMMY_PASSWORD);
    //       return null;
    //     }

    //     const passwordsMatch = await compare(password, user.password);

    //     if (!passwordsMatch) return null;

    //     return { ...user, type: 'regular' };
    //   },
    // }),
    // Credentials({
    //   id: 'guest',
    //   credentials: {},
    //   async authorize() {
    //     const [guestUser] = await createGuestUser();
    //     return { ...guestUser, type: 'guest' };
    //   },
    // }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // If new user object (from any provider), ensure DB row exists
      if (token.email) {
        // likely OAuth user without DB entry
        const dbUser = await upsertOAuthUser(token.email);
        token.id = dbUser.id;
        token.type = dbUser.type as any;
        token.plan = dbUser.planId;
        token.usageRemaining = dbUser.usageRemaining;
      }

      if (user) {
        token.id = user.id as string;
        token.type = user.type;
      }

      return token;
    },
    async session({ session, token }) {
      // If token has no id (OAuth existing session), ensure we fetch from DB
      const [dbUser] = await getUser(token?.email as string);
      if (dbUser) {
        token.id = dbUser.id;
        token.type = dbUser.type as any;
        token.plan = dbUser.planId;
        token.usageRemaining = dbUser.usageRemaining;
      }
      if (session.user) {
        session.user.id = token.id;
        session.user.type = token.type;
        // @ts-ignore
        session.user.planId = token.plan;
        // @ts-ignore
        session.user.usageRemaining = token.usageRemaining;
      }

      return session;
    },
  },
});
