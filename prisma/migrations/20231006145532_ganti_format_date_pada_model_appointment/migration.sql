/*
  Warnings:

  - You are about to drop the `Campus` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Appointment` MODIFY `tanggal` DATE NOT NULL;

-- DropTable
DROP TABLE `Campus`;
