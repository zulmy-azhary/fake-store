import { ImageListItem, Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { useProducts, useShoppingCart } from "../context";
import { formatCurrency } from "../helper";
import type { CartItemProps, ProductProps } from "../types";
import { useTheme } from "@mui/material/styles";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
        <Box display="flex" flexDirection="column" rowGap={0.5}>
          <Typography
            component="h2"
            variant="overline"
            sx={{ fontSize: 13, width: 220, lineHeight: 1.5 }}
          >
            {product.title}
          </Typography>
          <Typography
            component="p"
            variant="subtitle2"
            sx={{ fontSize: 12, color: theme.palette.grey[500] }}
          >
            {formatCurrency(product.price)}
            <Typography component="span" variant="subtitle1" sx={{ fontSize: 9, ml: 0.75 }}>x{quantity}</Typography>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={1}>
          <Typography component="h3" variant="body2" sx={{ fontSize: 14 }}>
            {formatCurrency(product.price * quantity)}
          </Typography>
          <IconButton
            size="small"
            sx={{
              bgcolor: theme.palette.error.main,
              borderRadius: 1,
            }}
            onClick={() => removeCart(product.id)}
          >
            <DeleteForeverIcon sx={{ fontSize: 25.5 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CartItem;
