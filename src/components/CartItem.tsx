import { ImageListItem, Box, Typography } from "@mui/material";
import React from "react";
import { useProducts, useShoppingCart } from "../context";
import { formatCurrency } from "../helper";
import type { CartItemProps, ProductProps } from "../types";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CustomButton } from "./";

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeCart } = useShoppingCart();
  const { products } = useProducts();
  const theme = useTheme();
  const product = products.find((product: ProductProps) => product.id === id);
  if (!product) return null;

  return (
    <Box display="flex" flex-direction="column" alignItems="center" columnGap={1}>
      <ImageListItem sx={{ width: 120, bgcolor: "#FFF" }}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          style={{ height: 100, objectFit: "contain" }}
        />
      </ImageListItem>
      <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <Box display="flex" flexDirection="column" rowGap={0.5} width={250}>
          <Typography
            component="h2"
            variant="overline"
            sx={{ fontSize: 13, fontWeight: "500", lineHeight: 1.5 }}
          >
            {product.title}
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            sx={{ fontSize: 12, color: "text.secondary" }}
          >
            {formatCurrency(product.price)}
            <Typography component="span" variant="subtitle1" sx={{ fontSize: 9, ml: 0.75 }}>
              x{quantity}
            </Typography>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={1}>
          <Typography component="h3" variant="body2" sx={{ fontSize: 13 }}>
            {formatCurrency(product.price * quantity)}
          </Typography>
          <CustomButton
            size="small"
            bgColor={theme.palette.error.main}
            onClick={() => removeCart(product.id)}
          >
            <DeleteForeverIcon />
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
