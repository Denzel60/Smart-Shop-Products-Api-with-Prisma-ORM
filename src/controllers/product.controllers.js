import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await prisma.products_prisma.findMany();
    res.status(200).json({ success: true, message: allProducts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message /*"An error occured"*/ });
  }
};

export const getSpecificProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const getProducts = await prisma.products_prisma.findFirst({
      where: { id: id },
      select: {
        productthumbnail: true,
        producttitle: true,
        productdescription: true,
        productcost: true,
        onoffer: true,
      },
    });
    res.status(200).json({ success: true, message: getProducts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message /*"An error occured while getting product"*/,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      productthumbnail,
      producttitle,
      productdescription,
      productcost,
      onoffer,
    } = req.body;
    const newProduct = await prisma.products_prisma.create({
      data: {
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message /*"An error occured"*/ });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const {
      productthumbnail,
      producttitle,
      productdescription,
      productcost,
      onoffer,
    } = req.body;
    const updateProduct = await prisma.products_prisma.update({
      where: { id: id },
      data: {
        productthumbnail,
        producttitle,
        productdescription,
        productcost,
        onoffer,
      },
    });
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message /*"An error occured while updating product",*/,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await prisma.products_prisma.delete({
      where: { id: id },
    });
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json({
      success: true,
      message: error.message /*"An error occured while deleting product",*/,
    });
  }
};
