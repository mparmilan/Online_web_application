import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    productPrice: "",
    productCount: "",
    category: "",
  });
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/api/v1/product/${id}`, formData)
      .then((res) => {
        setFormData(res.data);
        toast.success("Product updated Successfully!", {
          duration: 4000,
        });
        navigate("/admin/products");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchCategoriesApi = async () => {
      await axios
        .get("http://localhost:8080/api/v1/category")
        .then((res) => {
          console.log(res);
          setCategories(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const fetchApi = async () => {
      await axios
        .get(`http://localhost:8080/api/v1/product/${id}`)
        .then((res) => {
          setFormData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCategoriesApi();
    fetchApi();
  }, [id]);

  return (
    <section className="font-poppins">
      <div className="max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8 w-full mx-auto">
        <form
          action="#"
          className="space-y-4 bg-white p-5 rounded"
          onSubmit={handleUpdate}
        >
          <h1 className="text-center py-2 text-2xl">Edit Products</h1>
          <div>
            <label className=" text-gray-600 py-5" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className=" text-gray-600 py-5" htmlFor="message">
              Description
            </label>

            <textarea
              className="w-full rounded-lg border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              rows="6"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <div>
                <label className=" text-gray-600 py-5" htmlFor="productPrice">
                  Product Price
                </label>
                <input
                  className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                  type="text"
                  id="productPrice"
                  name="productPrice"
                  value={formData.productPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div>
                <label className=" text-gray-600 py-5" htmlFor="productCount">
                  Product Count
                </label>
                <input
                  className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                  type="number"
                  id="productCount"
                  name="productCount"
                  value={formData.productCount}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="category" className="text-gray-600 py-5">
              Product Category
            </label>
            <select
              className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">-- Select Category --</option>
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

          <div className="mt-4 pb-4">
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-600 px-5 py-2 font-medium text-white"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditScreen;
