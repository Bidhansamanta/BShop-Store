import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [product, setProduct] = useState([]);

  async function getApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(`Error while creating Fetching the data ${error.message}`);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}
