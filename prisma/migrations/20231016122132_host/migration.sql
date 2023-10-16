/*
  Warnings:

  - The primary key for the `Host` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_hostId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "hostId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Host" DROP CONSTRAINT "Host_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Host_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
