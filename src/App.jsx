import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Layout from "./components/Layout"; 
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AddToCard from "./components/AddToCard";

function App() {
  const [product, setProduct] = useState([]);

  async function getApi() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProduct(data.products);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home product={product} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product product={product} />} />
          <Route path="/addtocard" element={<AddToCard product={product}  />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
