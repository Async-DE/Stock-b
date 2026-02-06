/*
  Warnings:

  - You are about to drop the column `productosId` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contacto_cliente` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costos_extras` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motivo_costo_extra` to the `ventas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre_cliente` to the `ventas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "usuario" DROP CONSTRAINT "usuario_productosId_fkey";

-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "productosId",
ADD COLUMN     "estado" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ventas" ADD COLUMN     "contacto_cliente" TEXT NOT NULL,
ADD COLUMN     "costos_extras" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "motivo_costo_extra" TEXT NOT NULL,
ADD COLUMN     "nombre_cliente" TEXT NOT NULL;
