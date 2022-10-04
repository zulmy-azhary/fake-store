import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  description: string;
  rating: Record<string, number>;
}

const Store: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const theme = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.length ? (
        <ImageList cols={4} gap={16} sx={{ width: "100%" }}>
          {products.map((product: Product) => (
            <ImageListItem key={product.image} sx={{ width: 248 }}>
              <img
                src={product.image}
                srcSet={product.image}
                alt={product.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Typography
                    component="h4"
                    variant="h4"
                    sx={{ fontWeight: "bold", fontSize: 18, color: theme.palette.primary.main }}
                    noWrap
                  >
                    {product.title}
                  </Typography>
                }
                subtitle={
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ fontSize: 14, color: theme.palette.success.light }}
                  >
                    {product.category}
                  </Typography>
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Store;
