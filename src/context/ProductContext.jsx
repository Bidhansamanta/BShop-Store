import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
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
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}
