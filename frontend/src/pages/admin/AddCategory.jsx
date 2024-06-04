import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/category", {
        categoryName,
        categoryDescription,
      })
      .then((res) => {
        console.log(res);
        toast.success("Category Added Successfully");
        navigate("/admin/categories");
      })
      .catch((err) => {
        console.log(err);
      });
    setCategoryName("");
    setCategoryDescription("");
  };
  return (
    <div className="max-w-screen-lg px-4 py-8 sm:px-6 lg:px-4 w-full mx-auto font-poppins">
      <section className="font-poppins">
        <div className="max-w-screen-sm px-4 py-16 sm:px-6 lg:px-8 w-full mx-auto">
          <form
            action="#"
            className="space-y-4 bg-white p-5 rounded"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center py-2 text-2xl font-acme">
              Add Category Here!
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
                value={categoryName}
                onChange={(event) => setCategoryName(event.target.value)}
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
                value={categoryDescription}
                onChange={(event) => setCategoryDescription(event.target.value)}
              />
            </div>

            <div className="mt-4 pb-4 py-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-600 px-5 py-2 font-medium text-white hover:bg-gray-700"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddCategory;
