/*
  Warnings:

  - You are about to drop the column `username` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `username`,
    ADD COLUMN `email_verified` DATETIME(3) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `VerificationToken` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_email_token_key`(`email`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` VARCHAR(191) NOT NULL,
    `paypalId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `celular` VARCHAR(191) NULL,
    `medioDePago` VARCHAR(191) NULL,
    `nombreTarjeta` VARCHAR(191) NULL,
    `pais` VARCHAR(191) NULL,
    `codigoZip` VARCHAR(191) NULL,
    `montoTotal` DECIMAL(65, 30) NOT NULL,
    `modoTarjeta` VARCHAR(191) NOT NULL,
    `estadoPago` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
