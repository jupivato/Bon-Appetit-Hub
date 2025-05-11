-- CreateEnum
CREATE TYPE "Role" AS ENUM ('COMUM', 'ADMINISTRADOR');

-- CreateEnum
CREATE TYPE "DificuldadeReceita" AS ENUM ('FACIL', 'MEDIO', 'DIFICIL');

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'COMUM',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etiquetas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "etiquetas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem_url" TEXT,
    "categoriaIngrediente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ingredientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receitas" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem_url" TEXT,
    "tempo_preparo" TEXT NOT NULL,
    "dificuldade" "DificuldadeReceita" NOT NULL,
    "rendimento" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "autorId" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "receitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receita_etiquetas" (
    "receitaId" INTEGER NOT NULL,
    "etiquetaId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receita_etiquetas_pkey" PRIMARY KEY ("receitaId","etiquetaId")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "autorId" INTEGER NOT NULL,
    "receitaId" INTEGER NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receitas_favoritas" (
    "usuarioId" INTEGER NOT NULL,
    "receitaId" INTEGER NOT NULL,
    "favoritedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "receitas_favoritas_pkey" PRIMARY KEY ("usuarioId","receitaId")
);

-- CreateTable
CREATE TABLE "item_receita_ingredientes" (
    "id" SERIAL NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "unidade" TEXT NOT NULL,
    "receitaId" INTEGER NOT NULL,
    "ingredienteId" INTEGER NOT NULL,

    CONSTRAINT "item_receita_ingredientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listas_compras" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "listas_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_lista_compras" (
    "id" SERIAL NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "unidade" TEXT NOT NULL,
    "comprado" BOOLEAN NOT NULL DEFAULT false,
    "listaComprasId" INTEGER NOT NULL,
    "ingredienteId" INTEGER NOT NULL,

    CONSTRAINT "item_lista_compras_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nome_key" ON "categorias"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "etiquetas_nome_key" ON "etiquetas"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "ingredientes_nome_key" ON "ingredientes"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "listas_compras_usuarioId_key" ON "listas_compras"("usuarioId");

-- AddForeignKey
ALTER TABLE "receitas" ADD CONSTRAINT "receitas_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas" ADD CONSTRAINT "receitas_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receita_etiquetas" ADD CONSTRAINT "receita_etiquetas_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receita_etiquetas" ADD CONSTRAINT "receita_etiquetas_etiquetaId_fkey" FOREIGN KEY ("etiquetaId") REFERENCES "etiquetas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentarios" ADD CONSTRAINT "comentarios_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas_favoritas" ADD CONSTRAINT "receitas_favoritas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receitas_favoritas" ADD CONSTRAINT "receitas_favoritas_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_receita_ingredientes" ADD CONSTRAINT "item_receita_ingredientes_receitaId_fkey" FOREIGN KEY ("receitaId") REFERENCES "receitas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_receita_ingredientes" ADD CONSTRAINT "item_receita_ingredientes_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "ingredientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listas_compras" ADD CONSTRAINT "listas_compras_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_lista_compras" ADD CONSTRAINT "item_lista_compras_listaComprasId_fkey" FOREIGN KEY ("listaComprasId") REFERENCES "listas_compras"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_lista_compras" ADD CONSTRAINT "item_lista_compras_ingredienteId_fkey" FOREIGN KEY ("ingredienteId") REFERENCES "ingredientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
