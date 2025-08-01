CREATE TABLE IF NOT EXISTS "Plan" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(32) NOT NULL,
	"quota" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "type" varchar DEFAULT 'guest' NOT NULL;--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "planId" uuid;--> statement-breakpoint
ALTER TABLE "User" ADD COLUMN "usageRemaining" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "User" ADD CONSTRAINT "User_planId_Plan_id_fk" FOREIGN KEY ("planId") REFERENCES "public"."Plan"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
