import { ImageList, Skeleton, Box } from "@mui/material";
import React from "react";
import { ProductsCard } from "../components";
import { useProducts } from "../context";
import { breakpoints } from "../helper";
import type { ProductProps } from "../types";

const Products: React.FC = () => {
  const { products, loading } = useProducts();
  const mediaState = breakpoints(1, 2, 3, 4) as number;

  return (
    <ImageList cols={mediaState} gap={24} sx={{ width: "100%", overflowY: "initial", m: 0 }}>
      {!loading
        ? products.map((product: ProductProps) => (
            <ProductsCard key={product.id} product={product} />
          ))
        : Array.from(new Array(12)).map((_, idx: number) => (
            <Box
              key={idx}
              sx={{
                width: 248,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              <Skeleton variant="rectangular" width="100%" height={355} />
              <Skeleton variant="text" width="100%" height={24} sx={{ mt: 0.5 }} />
              <Skeleton variant="text" width="60%" height={16} sx={{ mt: 0.5 }} />
              <Skeleton variant="text" width="80%" height={18} sx={{ mt: 0.5 }} />
              <Skeleton variant="rounded" width="50%" height={24} sx={{ mt: 0.75 }} />
              <Skeleton variant="text" width="100%" height={58} />
            </Box>
          ))}
    </ImageList>
  );
};

export default Products;
