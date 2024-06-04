import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuView } from "react-icons/lu";
import toast from "react-hot-toast";

const CategoryList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const getCategoryApi = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/category`)
      .then((res) => {
        console.log(res);
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/v1/category/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Category deleted Successfully!", {
          duration: 5000,
        });
        getCategoryApi();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategoryApi();
  }, []);

  return (
    <div className="max-w-screen-lg px-4 py-16 sm:px-6 lg:px-4 w-full mx-auto font-poppins">
      <h1 className="text-center font-acme text-2xl"> Category List Here!</h1>
      <div className="flex justify-end">
        <Link to="/admin/addcategory">
          <button className="px-3 py-2 bg-sky-500 rounded-md text-white my-3 mr-2 gap-1 flex items-center">
            <MdAddCircleOutline size={20} />
            Category
          </button>
        </Link>
      </div>
      <div className="rounded-lg border border-gray-200">
        <div className="rounded">
          <table className="min-w-full divide-y-2 divide-gray-200 text-md">
            <thead>
              <tr>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Category Name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Category Description
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {category.map((item, index) => (
                <tr key={index} className="space-y-3">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {item.categoryName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {item.categoryDescription.slice(0, 60)}. . .
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    <Link to={`/admin/editcategory/${item._id}`}>
                      <button className="px-4 py-2 bg-cyan-500 rounded-md text-white mr-2">
                        <FaEdit />
                      </button>
                    </Link>
                    <Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-4 py-2 bg-red-500 rounded-md text-white"
                      >
                        <MdDelete />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
