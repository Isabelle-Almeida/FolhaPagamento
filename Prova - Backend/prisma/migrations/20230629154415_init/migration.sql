-- CreateTable
CREATE TABLE `Folha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `horas` INTEGER NOT NULL,
    `valor` DOUBLE NOT NULL,
    `mes` INTEGER NOT NULL,
    `ano` INTEGER NOT NULL,

    UNIQUE INDEX `Folha_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Calculo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bruto` DOUBLE NULL,
    `irff` DOUBLE NULL,
    `inss` DOUBLE NULL,
    `fgts` DOUBLE NULL,
    `liquido` DOUBLE NULL,
    `folhaId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Calculo` ADD CONSTRAINT `Calculo_folhaId_fkey` FOREIGN KEY (`folhaId`) REFERENCES `Folha`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
