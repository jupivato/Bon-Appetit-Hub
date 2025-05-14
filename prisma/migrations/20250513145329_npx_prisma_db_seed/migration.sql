/*
  Warnings:

  - You are about to drop the column `comprado` on the `item_lista_compras` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `item_lista_compras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item_lista_compras" DROP COLUMN "comprado",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
