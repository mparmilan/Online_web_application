import React from "react";
import { Link } from "react-router-dom";
import { SiStmicroelectronics } from "react-icons/si";

const Header = () => {
  return (
    <header className="bg-neutral-50 font-poppins">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <div className="flex items-center">
                <SiStmicroelectronics size={40} className=" text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-700">
                  <span className="mr-1">Help</span>
                  <span>Scout</span>
                </h1>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-md">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/shop"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/feedback"
                  >
                    Feedback
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  ></a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                to="/login"
              >
                Login
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
