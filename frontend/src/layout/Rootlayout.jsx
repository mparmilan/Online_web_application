import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div>
      <Header />
      <div className=" bg-neutral-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Rootlayout;
