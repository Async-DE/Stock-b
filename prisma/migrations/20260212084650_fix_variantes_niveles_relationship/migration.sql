/*
  Warnings:

  - You are about to drop the column `nivel` on the `estantes` table. All the data in the column will be lost.
  - You are about to drop the column `categoriaId` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `estantesId` on the `productos` table. All the data in the column will be lost.
  - You are about to drop the column `estante_id` on the `variantes` table. All the data in the column will be lost.
  - You are about to drop the column `locacion_id` on the `variantes` table. All the data in the column will be lost.
  - Added the required column `nivelesId` to the `variantes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Accion" ADD VALUE 'LOGOUT';

-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "productos" DROP CONSTRAINT "productos_estantesId_fkey";

-- DropForeignKey
ALTER TABLE "variantes" DROP CONSTRAINT "variantes_producto_id_fkey";

-- AlterTable
ALTER TABLE "auditoria" ADD COLUMN     "subcategoriaId" INTEGER,
ADD COLUMN     "ubicacionId" INTEGER;

-- AlterTable
ALTER TABLE "estantes" DROP COLUMN "nivel";

-- AlterTable
ALTER TABLE "productos" DROP COLUMN "categoriaId",
DROP COLUMN "estantesId",
ADD COLUMN     "subcategoriaId" INTEGER;

-- AlterTable
ALTER TABLE "variantes" DROP COLUMN "estante_id",
DROP COLUMN "locacion_id",
ADD COLUMN     "nivelesId" INTEGER NOT NULL,
ALTER COLUMN "ganacia_publico" SET DEFAULT 0,
ALTER COLUMN "ganacia_contratista" SET DEFAULT 0,
ALTER COLUMN "ganancias_stock" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "sesion" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "revocado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "niveles" (
    "id" SERIAL NOT NULL,
    "estantesId" INTEGER NOT NULL,
    "niveles" INTEGER NOT NULL,

    CONSTRAINT "niveles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subcategorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ganancias_ventas" DOUBLE PRECISION NOT NULL,
    "ganancias_stock" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "subcategorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sesion_token_key" ON "sesion"("token");

-- CreateIndex
CREATE INDEX "sesion_usuario_id_idx" ON "sesion"("usuario_id");

-- CreateIndex
CREATE INDEX "sesion_token_idx" ON "sesion"("token");

-- CreateIndex
CREATE INDEX "auditoria_subcategoriaId_idx" ON "auditoria"("subcategoriaId");

-- CreateIndex
CREATE INDEX "auditoria_ubicacionId_idx" ON "auditoria"("ubicacionId");

-- AddForeignKey
ALTER TABLE "sesion" ADD CONSTRAINT "sesion_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "niveles" ADD CONSTRAINT "niveles_estantesId_fkey" FOREIGN KEY ("estantesId") REFERENCES "estantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subcategorias" ADD CONSTRAINT "subcategorias_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "subcategorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variantes" ADD CONSTRAINT "variantes_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "variantes" ADD CONSTRAINT "variantes_nivelesId_fkey" FOREIGN KEY ("nivelesId") REFERENCES "niveles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auditoria" ADD CONSTRAINT "auditoria_subcategoria_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "subcategorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auditoria" ADD CONSTRAINT "auditoria_ubicacion_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "ubicacion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
