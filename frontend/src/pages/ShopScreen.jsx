import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopScreen = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  const getProductsApi = async () => {
    await axios
      .get("http://localhost:8080/api/v1/product")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setSearchResults(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductsApi();
  }, []);

  const handleSearch = (searchedValue) => {
    console.log(searchedValue);
    const searchKeyWord = searchedValue.toLowerCase();
    const result = products.filter(
      (product) =>
        product.productName.toLowerCase().includes(searchKeyWord) ||
        product.description.toLowerCase().includes(searchKeyWord)
      // product.category.toLowerCase().includes(searchKeyWord)
    );
    console.log(result);
    setSearchResults(result);
  };

  return (
    <div className="max-w-screen-xl lg:px-24 px-4 py-12 font-poppins mx-auto">
      <div className="flex justify-between py-5">
        <h1 className="text-center text-3xl font-semibold text-cyan-600 font-acme tracking-wide">
          All the Products Here
        </h1>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            className="px-3 py-2 focus:outline-cyan-400 rounded-md bg-neutral-200 border border-gray-400"
            placeholder="🔍 Search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
              handleSearch(event.target.value);
            }}
            // onKeyDown={handleSearch}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {searchResults.map((product, index) => (
          <article
            className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
            key={index}
          >
            <Link to={`/shop/${product._id}`}>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-40 w-full object-cover"
              />
            </Link>
            <div className="bg-white p-4 sm:p-6">
              <Link to={`/shop/${product._id}`}>
                <h3 className="mt-0.5 text-lg text-gray-900">
                  {product.productName}
                </h3>
              </Link>
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {product.description.slice(0, 20)}...
              </p>
              <div className="flex justify-between">
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {product.productPrice}
                </p>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  {product.category}
                </p>
              </div>
              <div className="py-3">
                <div>
                  {product.productCount === 0 ? (
                    <>
                      <button className="px-4 py-1.5 w-full bg-sky-500 rounded-md text-white disabled cursor-not-allowed">
                        Add To Cart
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="px-4 py-1.5 w-full bg-cyan-600 rounded-md text-white hover:bg-cyan-700">
                        Add To Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <ol className="flex justify-center gap-1 text-xs font-medium">
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

export default ShopScreen;
