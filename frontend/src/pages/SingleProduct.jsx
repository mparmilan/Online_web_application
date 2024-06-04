import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/product/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="max-w-screen-lg px-4 py-16 sm:px-6 lg:px-4 w-full mx-auto font-poppins">
      {product ? (
        <div>
          <article className=" max-w-screen-sm overflow-hidden rounded-lg transition">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-80 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6 space-y-3">
              <time
                datetime="2022-10-10"
                className="block text-md text-gray-500"
              >
                {product.createdAt}
              </time>

              <h3 className="mt-0.5 text-xl text-gray-900 font-medium">
                {product.productName}{" "}
              </h3>

              <div className="mt-2 line-clamp-3 text-md text-gray-500">
                Description:
                <span className="text-sm"> {product.description}</span>
              </div>
              <p className="mt-2 line-clamp-3 text-md text-gray-500">
                Category: <span className="text-sm">{product.category}</span>
              </p>
              <p className="mt-2 line-clamp-3 text-md text-gray-500">
                Price:{" "}
                <span className="text-sm">Rs.{product.productPrice}</span>
              </p>
              <div className="text-md text-gray-500 flex justify-between items-center">
                <span className="text-sm">
                  {product.productCount === 0 ? (
                    <p className="text-base bg-red-500 rounded-full px-4 w-32 text-white">
                      Out of stock
                    </p>
                  ) : (
                    <p className="text-base flex items-center">
                      Count In Stock:{" "}
                      <p className="text-sm ml-1"> {product.productCount}</p>
                    </p>
                  )}
                </span>
                <div>
                  {product.productCount === 0 ? (
                    <>
                      <button className="px-4 py-1.5 bg-cyan-500 rounded-md text-white disabled cursor-not-allowed">
                        Add To Cart
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="px-4 py-1.5 bg-cyan-500 rounded-md text-white hover:bg-cyan-700">
                        Add To Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default SingleProduct;
