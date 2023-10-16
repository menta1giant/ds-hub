/*
  Warnings:

  - Made the column `hostType` on table `Host` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Host" DROP CONSTRAINT "Host_hostType_fkey";

-- AlterTable
ALTER TABLE "Host" ALTER COLUMN "hostType" SET NOT NULL,
ALTER COLUMN "hostType" SET DEFAULT 'Discord';

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_hostType_fkey" FOREIGN KEY ("hostType") REFERENCES "HostType"("type") ON DELETE RESTRICT ON UPDATE CASCADE;
