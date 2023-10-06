/*
  Warnings:

  - You are about to drop the column `updateAt` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Doctor` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Team` table. All the data in the column will be lost.
  - Added the required column `dokter` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pesan` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telp` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isi_blog` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `judul` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `penulis` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_terbit` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateAt` to the `Mahasiswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `divisi` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foto` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instagram` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo_universitas` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsapp` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `updateAt`,
    ADD COLUMN `dokter` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `pesan` TEXT NOT NULL,
    ADD COLUMN `tanggal` DATETIME(3) NOT NULL,
    ADD COLUMN `telp` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Blog` DROP COLUMN `updateAt`,
    ADD COLUMN `foto` VARCHAR(191) NOT NULL,
    ADD COLUMN `isi_blog` TEXT NOT NULL,
    ADD COLUMN `judul` VARCHAR(191) NOT NULL,
    ADD COLUMN `penulis` VARCHAR(191) NOT NULL,
    ADD COLUMN `tanggal_terbit` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Doctor` DROP COLUMN `updateAt`;

-- AlterTable
ALTER TABLE `Mahasiswa` ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Team` DROP COLUMN `updateAt`,
    ADD COLUMN `divisi` VARCHAR(191) NOT NULL,
    ADD COLUMN `foto` VARCHAR(191) NOT NULL,
    ADD COLUMN `instagram` VARCHAR(191) NOT NULL,
    ADD COLUMN `linkedin` VARCHAR(191) NOT NULL,
    ADD COLUMN `logo_universitas` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `whatsapp` VARCHAR(191) NOT NULL;
