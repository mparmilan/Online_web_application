import express from "express";
import {
  createProducts,
  getProducts,
  getProduct,
  updateProducts,
  deleteProducts,
} from "../controllers/productController.js";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.single("image"), createProducts);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
