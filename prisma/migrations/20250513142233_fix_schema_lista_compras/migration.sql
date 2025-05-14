/*
  Warnings:

  - You are about to drop the column `quantidade` on the `item_lista_compras` table. All the data in the column will be lost.
  - You are about to drop the column `unidade` on the `item_lista_compras` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "item_lista_compras" DROP COLUMN "quantidade",
DROP COLUMN "unidade";
