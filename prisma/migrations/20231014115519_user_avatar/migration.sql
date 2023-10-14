/*
  Warnings:

  - Added the required column `avatar` to the `SiteUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteUser" ADD COLUMN     "avatar" TEXT NOT NULL;
