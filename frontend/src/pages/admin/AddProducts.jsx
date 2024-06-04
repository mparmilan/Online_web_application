import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCount, setProductCount] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("productPrice", productPrice);
    formData.append("productCount", productCount);
    formData.append("category", category);
    formData.append("image", image);

    await axios
      .post("http://localhost:8080/api/v1/product", formData)
      .then((res) => {
        console.log(res);
        toast.success("Product created Successfully!", { duration: 5000 });
        navigate("/admin/products");
        setProductName("");
        setDescription("");
        setProductPrice("");
        setProductCount("");
        setCategory("");
        setImage(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCategories = async () => {
    await axios
      .get("http://localhost:8080/api/v1/category")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section className="font-poppins">
      <div className="max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8 w-full mx-auto">
        <form
          action="#"
          className="space-y-4 bg-white p-5 rounded"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center py-2 text-2xl font-acme">
            Add Products Here!
          </h1>{" "}
          <div>
            <label className=" text-gray-600 py-5" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              type="text"
              id="productName"
              name="productName"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
          </div>
          <div>
            <label className=" text-gray-600 py-5" htmlFor="description">
              Description
            </label>

            <textarea
              className="w-full rounded-lg border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              rows="6"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className=" text-gray-600 py-5" htmlFor="productPrice">
                Product Price
              </label>
              <input
                className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                type="text"
                id="productPrice"
                name="productPrice"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
              />
            </div>
            <div>
              <label className=" text-gray-600 py-5" htmlFor="productCount">
                Product Count
              </label>
              <input
                className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                type="number"
                id="productCount"
                name="productCount"
                min={0}
                value={productCount}
                onChange={(event) => setProductCount(event.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="category" className=" text-gray-600 py-5">
              Product Category
            </label>
            <select
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              id="category"
              name="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value=""> -- Select Category-- </option>
              {categories.map((item) => (
                <option
                  label={item.categoryName}
                  key={item._id}
                  value={item._id}
                >
                  {item.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className=" text-gray-600 py-5" htmlFor="image">
              Product Image
            </label>
            <input
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              type="file"
              accept=".png, .jpg, .jpeg"
              id="image"
              name="image"
              onChange={(event) => setImage(event.target.files[0])}
            />
          </div>
          <div className="mt-4 pb-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-600 px-5 py-2 font-medium text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
