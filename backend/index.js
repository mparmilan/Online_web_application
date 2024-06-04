import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/productRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import userRoute from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import multer from "multer";

dotenv.config();

// initialize express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("./uploads", express.static(path.join(__dirname, "uploads")));

// app.use(notFound);
// app.use(errorHandler);

// routes
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/users", userRoute);

// Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Connction failed", error);
  });

// Server connection
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
