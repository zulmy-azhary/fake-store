import { Box, Typography } from "@mui/material";
import React from "react";
import { useProducts, useShoppingCart } from "../context";
import { formatCurrency } from "../helper";
import type { CartItemProps, ProductProps } from "../types";

const TotalCart: React.FC = () => {
  const { cartItems } = useShoppingCart();
  const { products } = useProducts();

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "baseline", columnGap: 5 }}>
      <Typography
        component="p"
        variant="body1"
        textAlign="center"
        sx={{ fontWeight: "500", color: "text.primary", fontSize: 24 }}
      >
        Total
      </Typography>
      <Typography
        component="p"
        variant="body1"
        sx={{ fontWeight: "500", color: "text.primary", fontSize: 24 }}
      >
        {formatCurrency(
          cartItems.reduce((total: number, cartItem: CartItemProps): number => {
            const product = products.find((product: ProductProps) => product.id === cartItem.id);
            return total + (product?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </Typography>
    </Box>
  );
};

export default TotalCart;
