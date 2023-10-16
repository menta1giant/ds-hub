/*
  Warnings:

  - Added the required column `discordId` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE event_id_seq;
ALTER TABLE "Event" ADD COLUMN     "discordId" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('event_id_seq');
ALTER SEQUENCE event_id_seq OWNED BY "Event"."id";
