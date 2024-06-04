import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import ShopScreen from "./pages/ShopScreen";
import ContactScreen from "./pages/ContactScreen";
import FeedbackScreen from "./pages/FeedbackScreen";
import AboutScreen from "./pages/AboutScreen";
import CartScreen from "./pages/CartScreen";
import Dashboard from "./pages/admin/Dashboard";
import AddProducts from "./pages/admin/AddProducts";
import ProductsList from "./pages/admin/ProductsList";
import EditScreen from "./pages/admin/EditScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import SingleProduct from "./pages/SingleProduct";
import AddCategory from "./pages/admin/AddCategory";
import CategoryList from "./pages/admin/CategoryList";
import EditCategory from "./pages/admin/EditCategory";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/feedback" element={<FeedbackScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin/create" element={<AddProducts />} />
            <Route path="/admin/products" element={<ProductsList />} />
            <Route path="/admin/categories" element={<CategoryList />} />
            <Route path="/admin/edit/:id" element={<EditScreen />} />
            <Route path="/admin/editcategory/:id" element={<EditCategory />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/admin/addcategory" element={<AddCategory />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
