import Landing from '@/components/landing';
import { auth } from '@/app/(auth)/auth';
import Navbar from '@/components/navbar';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <>
      <Navbar />
      <Landing />
    </>
  );
}
