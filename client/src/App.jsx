import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
