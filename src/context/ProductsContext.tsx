import React, { createContext, useContext, useEffect, useState } from "react";
import type { ProductProps } from "../types";

interface ProductsCtx {
  products: ProductProps[];
}

const ProductsContext = createContext<ProductsCtx>({} as ProductsCtx);

export const useProducts = (): ProductsCtx => useContext(ProductsContext);

const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;