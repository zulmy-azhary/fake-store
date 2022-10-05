import { ImageList, Skeleton, Box } from "@mui/material";
import React from "react";
import { ProductCard } from "../components";
import { useProducts } from "../context";
import { breakpoints } from "../helper";
import type { ProductProps } from "../types";

const Store: React.FC = () => {
  const { products } = useProducts();
  const mediaState = breakpoints(1, 2, 3, 4) as number;

  return (
    <ImageList cols={mediaState} gap={24} sx={{ width: "100%", overflowY: "initial", m: 0 }}>
      {products.length
        ? products.map((product: ProductProps) => (
            <ProductCard key={product.id} product={product} />
          ))
        : Array.from(new Array(12)).map((_, idx: number) => (
            <Box
              key={idx}
              width={248}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifySelf: "center" }}
            >
              <Skeleton variant="rectangular" width="100%" height={355} />
              <Skeleton variant="text" width="100%" height={18} sx={{ mt: 0.5 }} />
              <Skeleton variant="text" width="60%" height={14} sx={{ mt: 0.5 }} />
              <Skeleton variant="text" width="50%" height={30} sx={{ mt: 0.5 }} />
              <Skeleton variant="text" width="100%" height={62} />
            </Box>
          ))}
    </ImageList>
  );
};

export default Store;
