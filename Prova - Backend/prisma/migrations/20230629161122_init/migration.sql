/*
  Warnings:

  - You are about to drop the `calculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `folha` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `calculo` DROP FOREIGN KEY `Calculo_folhaId_fkey`;

-- DropTable
DROP TABLE `calculo`;

-- DropTable
DROP TABLE `folha`;

-- CreateTable
CREATE TABLE `FolhadePagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `horas` DOUBLE NOT NULL,
    `valorHora` DOUBLE NOT NULL,
    `mes` INTEGER NOT NULL,
    `ano` INTEGER NOT NULL,
    `bruto` DOUBLE NULL,
    `ir` DOUBLE NULL,
    `inss` DOUBLE NULL,
    `fgts` DOUBLE NULL,
    `liquido` DOUBLE NULL,

    UNIQUE INDEX `FolhadePagamento_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
