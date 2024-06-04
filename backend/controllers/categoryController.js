import CategoryModel from "../models/categoryModel.js";

// GetAll Category(GET) - /api/v1/category
export const getCategories = async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).json(categories);
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Category(POST) - /api/v1/category
export const createCategory = async (req, res) => {
  const { categoryName, categoryDescription } = req.body;
  if (!categoryName || !categoryDescription) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields" });
  }
  const category = new CategoryModel({
    categoryName,
    categoryDescription,
  });
  await category.save();
  res.status(201).json({ message: "Category created successfully", category });
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GetSingle Category(GET) - /api/v1/category/:id
export const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);

  res.status(200).json(category);
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Category(PUT) - /api/v1/category/:id
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, categoryDescription } = req.body;

    const updateData = {
      categoryName,
      categoryDescription,
    };

    const updateCat = await CategoryModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updateCat) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updateCat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Category(DELETE) - /api/v1/category/:id
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCat = await CategoryModel.findByIdAndDelete(id);
    if (!deleteCat) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
