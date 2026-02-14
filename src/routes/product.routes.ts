import { Router } from "express";
import {getProducts, createProduct, getProductsById, updateProduct, deleteProduct} from "../controllers/product.controller"
import {upload} from "../middlewares/upload.middleware"
import {authenticate} from "../middlewares/auth.middleware"

const router =  Router();

router.post("/", authenticate, upload.single("image"), createProduct);
router.get("/", getProducts);
router.get("/:id", getProductsById);
router.put("/:id", authenticate, upload.single("image"), updateProduct);
router.delete("/:id", authenticate, deleteProduct);

export default router;