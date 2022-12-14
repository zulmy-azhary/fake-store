import React, { createContext, useContext, useEffect, useState } from "react";
import { productsUrl } from "../helper";
import type { ProductProps } from "../types";

interface ProductsCtx {
  products: ProductProps[];
  loading: boolean;
}

const ProductsContext = createContext<ProductsCtx>({} as ProductsCtx);

export const useProducts = (): ProductsCtx => useContext(ProductsContext);

const ProductsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);

    fetch(productsUrl, { signal })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
      });

    // Clean up
    return () => controller.abort();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
