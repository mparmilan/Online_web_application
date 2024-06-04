import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);
export default CategoryModel;
