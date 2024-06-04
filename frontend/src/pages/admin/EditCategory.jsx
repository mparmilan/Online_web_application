import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    categoryName: "",
    categoryDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const fetchCategoryApi = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/category/${id}`)
      .then((res) => {
        setFormData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCategoryApi();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8080/api/v1/category/${id}`, formData)
      .then((res) => {
        setFormData(res.data);
        toast.success("Category updated Successfully!", {
          duration: 4000,
        });
        navigate("/admin/categories");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-screen-lg px-4 py-16 sm:px-6 lg:px-4 w-full mx-auto font-poppins">
      <section className="font-poppins">
        <div className="max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8 w-full mx-auto">
          <form
            action="#"
            className="space-y-4 bg-white p-5 rounded"
            onSubmit={handleUpdate}
          >
            <h1 className="text-center py-2 text-2xl font-acme">
              Edit Category Here!
            </h1>
            <div>
              <label className=" text-gray-600 py-5" htmlFor="categoryName">
                Category Name
              </label>
              <input
                className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                type="text"
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="categoryDescription"
                className=" text-gray-600 py-5"
              >
                Category Description
              </label>
              <textarea
                className="w-full rounded border border-gray-200 focus:outline-indigo-200 p-3 text-sm"
                type="text"
                id="categoryDescription"
                rows={6}
                name="categoryDescription"
                value={formData.categoryDescription}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4 pb-4 py-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-600 px-5 py-2 font-medium text-white hover:bg-gray-700"
              >
                Update Category
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditCategory;
