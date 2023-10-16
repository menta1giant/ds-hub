-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "hostType" TEXT;

-- CreateTable
CREATE TABLE "HostType" (
    "type" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "HostType_type_key" ON "HostType"("type");

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_hostType_fkey" FOREIGN KEY ("hostType") REFERENCES "HostType"("type") ON DELETE SET NULL ON UPDATE CASCADE;
