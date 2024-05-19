-- DropIndex
DROP INDEX `ImagesUrls_estateId_fkey` ON `imagesurls`;

-- DropIndex
DROP INDEX `Owner_userId_key` ON `owner`;

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
