/*
  Warnings:

  - The primary key for the `collection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `malId` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[animeId,userEmail]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `animeId` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animeImage` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `animeTitle` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collectionId` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userEmail` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Collection_malId_email_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `malId`,
    ADD COLUMN `animeId` VARCHAR(191) NOT NULL,
    ADD COLUMN `animeImage` VARCHAR(191) NOT NULL,
    ADD COLUMN `animeTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `collectionId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`collectionId`);

-- CreateIndex
CREATE UNIQUE INDEX `Collection_animeId_userEmail_key` ON `Collection`(`animeId`, `userEmail`);
