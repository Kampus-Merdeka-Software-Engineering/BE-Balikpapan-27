/*
  Warnings:

  - Added the required column `updateAt` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Blog` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Doctor` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Team` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;
