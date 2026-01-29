import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Login from "./Login";
import Signup from "./Signup";// ✅ ADD THIS
import ProductsPage from "./ProductsPage";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductsPage />} /> 
      </Routes>

      <Footer />
    </>
  );
};

export default App;
