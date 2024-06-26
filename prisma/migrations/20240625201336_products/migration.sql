/*
  Warnings:

  - Added the required column `product_description` to the `products_table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products_table" ADD COLUMN     "product_description" TEXT NOT NULL;
