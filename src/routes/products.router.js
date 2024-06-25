import { Router } from "express";
import {
  getAllProducts,
  getSpecificProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controllers.js";
const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getSpecificProduct);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
