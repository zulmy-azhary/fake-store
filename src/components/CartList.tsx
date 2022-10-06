import { ImageList, Box, Typography } from "@mui/material";
import React from "react";
import { useShoppingCart } from "../context";
import type { CartItemProps } from "../types";
import { CartItem } from ".";

const CartList: React.FC = () => {
  const { cartItems } = useShoppingCart();

  return (
    <ImageList cols={1} gap={24} sx={{ width: "100%", overflowY: "initial", my: 0 }}>
      {cartItems.length ? (
        cartItems.map((item: CartItemProps) => <CartItem key={item.id} {...item} />)
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography>Belum ada produk yang ditambahkan.</Typography>
        </Box>
      )}
    </ImageList>
  );
};

export default CartList;
