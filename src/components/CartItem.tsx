import { ImageListItem, Box } from "@mui/material";
import React from "react";
import { useProducts } from "../context";
import type { CartItemProps, ProductProps } from "../types";
import { CartAction, CartItemInfos, NavLink } from '.';

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { products } = useProducts();
  const product = products.find((product: ProductProps) => product.id === id);
  if (!product) return null;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        columnGap: 1,
      }}
    >
      <ImageListItem sx={{ width: 120, bgcolor: "#FFF" }}>
        <NavLink href={`/store/product/${product.id}`} sx={{ height: 100 }}>
          <Box component="img"
            src={product.image}
            alt={product.title}
            loading="lazy"
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </NavLink>
      </ImageListItem>
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          rowGap: 1,
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        })}
      >
        <CartItemInfos product={product} quantity={quantity} />
        <CartAction product={product} quantity={quantity} />
      </Box>
    </Box>
  );
};

export default CartItem;
