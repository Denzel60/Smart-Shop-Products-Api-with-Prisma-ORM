-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "product_thumbnail" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_cost" INTEGER NOT NULL,
    "on_offer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
