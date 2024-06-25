import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProducts = (req, res) => {
  res.send("getting all product");
};

export const getSpecificProduct = (req, res) => {
  res.send("getting specific products");
};

export const createProduct = (req, res) => {
  res.send("creating a product");
};

export const updateProduct = (req, res) => {
  res.send("updating a product");
};

export const deleteProduct = (req, res) => {
  res.send("deleting a product");
};
