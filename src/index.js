import express from "express";
const app = express();
import productRouter from "./routes/products.router.js";

app.use(express.json());
app.use("/products", productRouter);

app.listen(3005, () => {
  console.log("app is running on port 3005");
});
