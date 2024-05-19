/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addedBy` to the `Estate` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ImagesUrls_estateId_fkey` ON `imagesurls`;

-- DropIndex
DROP INDEX `Owner_userId_fkey` ON `owner`;

-- AlterTable
ALTER TABLE `estate` ADD COLUMN `addedBy` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Owner_userId_key` ON `Owner`(`userId`);

-- AddForeignKey
ALTER TABLE `Estate` ADD CONSTRAINT `Estate_addedBy_fkey` FOREIGN KEY (`addedBy`) REFERENCES `Owner`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImagesUrls` ADD CONSTRAINT `ImagesUrls_estateId_fkey` FOREIGN KEY (`estateId`) REFERENCES `Estate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Flat` ADD CONSTRAINT `Flat_estateId_fkey` FOREIGN KEY (`estateId`) REFERENCES `Estate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `House` ADD CONSTRAINT `House_estateId_fkey` FOREIGN KEY (`estateId`) REFERENCES `Estate`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Owner` ADD CONSTRAINT `Owner_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer` ADD CONSTRAINT `Customer_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
