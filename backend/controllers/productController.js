import ProductModel from "../models/productModel.js";

// GetAll Products(GET) - /api/v1/product
export const getProducts = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json(products);
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Products(POST) - /api/v1/product
export const createProducts = async (req, res) => {
  try {
    const {
      productName,
      description,
      productPrice,
      productCount,
      category,
      image,
    } = req.body;
    if (
      !productName ||
      !productPrice ||
      !productCount ||
      !category ||
      !description
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all the required fields" });
    }
    const product = new ProductModel({
      productName,
      description,
      productPrice,
      productCount,
      category,
      image,
    });
    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GetSingle Product(GET) - /api/v1/product/:id
export const getProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.findById(id);

  //   if (!product) {
  //     return res.status(404).json({ message: "Product not found" });
  //   }

  res.status(200).json(product);
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Product(PUT) - /api/v1/product/:id
export const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      description,
      productPrice,
      productCount,
      category,
      image,
    } = req.body;

    const updateData = {
      productName,
      description,
      productPrice,
      productCount,
      category,
      image,
    };

    const updatePro = await ProductModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatePro) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatePro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product(DELETE) - /api/v1/product/:id
export const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePro = await ProductModel.findByIdAndDelete(id);
    if (!deletePro) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
