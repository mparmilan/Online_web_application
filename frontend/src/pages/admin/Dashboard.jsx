import React from "react";
import { GoPlusCircle } from "react-icons/go";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-screen-lg px-4 py-8 mx-auto font-poppins">
      <h1 className="text-2xl text-indigo-500 font-semibold py-6">Dashboard</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6">
        <div className="p-4 sm:p-6 rounded-md bg-cyan-500 text-white">
          <Link to="/admin/products">
            <h3 className="mt-0.5 text-xl font-semibold">Products Count</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed ">Count: 23</p>
          </Link>
        </div>
        <div className="p-4 sm:p-6 rounded-md bg-green-500 text-white">
          <Link to="/admin/categories">
            <h3 className="mt-0.5 text-xl font-semibold ">Category Count</h3>
            <p className="mt-2 line-clamp-3 text-sm/relaxed">Count: 23</p>
          </Link>
        </div>
        <div className="p-4 sm:p-6 w-full h-28 flex justify-center items-center rounded-md bg-sky-500 text-white">
          <Link to="/admin/create">
            <h3 className="mt-0.5 text-xl font-semibold flex items-center gap-2">
              <GoPlusCircle />
              Add Product
            </h3>
          </Link>
        </div>
        <div className="p-4 sm:p-6 w-full h-28 flex justify-center items-center rounded-md bg-purple-500 text-white">
          <Link to="/admin/addcategory">
            <h3 className="mt-0.5 text-xl font-semibold flex items-center gap-2">
              <GoPlusCircle />
              Add Category
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
