import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { LuView } from "react-icons/lu";

const ProductsList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Fetch details

  const getapi = async () => {
    await axios
      .get(`http://localhost:8080/api/v1/product`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getapi();
  }, []);

  // Delete products
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:8080/api/v1/product/${id}`)
      .then((response) => {
        toast.success("Product deleted Successfully!", {
          duration: 5000,
        });
        getapi();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="max-w-screen-lg px-4 py-16 sm:px-6 lg:px-4 w-full mx-auto font-poppins">
      <h1 className="text-center font-acme text-2xl"> Products List Here!</h1>
      <div className="flex justify-end">
        <Link to="/admin/create">
          <button className="px-3 py-2 bg-sky-500 rounded-md text-white my-3 flex items-center">
            <MdAddCircleOutline size={20} />
            Products
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
                  Product Name
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Description
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Price
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Count
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Category
                </th>
                <th className="whitespace-nowrap px-4 py-4 font-medium text-gray-900 text-start">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {products.map((product, index) => (
                <tr key={index} className="space-y-3">
                  <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {product.productName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {product.description.slice(0, 20)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {product.productPrice}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {product.productCount}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    {product.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700">
                    <Link to={`/shop/${product._id}`}>
                      <button className="px-4 py-2 bg-blue-500 rounded-md text-white mr-2">
                        <LuView />
                      </button>
                    </Link>
                    <Link to={`/admin/edit/${product._id}`}>
                      <button className="px-4 py-2 bg-cyan-500 rounded-md text-white mr-2">
                        <FaEdit />
                      </button>
                    </Link>
                    <Link>
                      <button
                        onClick={() => handleDelete(product._id)}
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
      <ol className="flex justify-center gap-1 text-xs font-medium py-10">
        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            1
          </a>
        </li>

        <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
          2
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            3
          </a>
        </li>

        <li>
          <a
            href="#"
            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
          >
            4
          </a>
        </li>

        <li>
          <a
            href="#"
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
};

export default ProductsList;
