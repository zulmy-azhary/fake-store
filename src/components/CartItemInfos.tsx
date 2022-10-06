import { Box, Typography } from "@mui/material";
import React from "react";
import { formatCurrency } from "../helper";
import type { ProductProps } from "../types";

interface Props {
  product: ProductProps;
  quantity: number;
}

const CartItemInfos: React.FC<Props> = ({ product, quantity }) => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        rowGap: 0.5,
        width: 250,
        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      })}
    >
      <Typography
        component="h2"
        variant="overline"
        sx={(theme) => ({
          fontSize: 13,
          fontWeight: "500",
          lineHeight: 1.5,
          [theme.breakpoints.down("sm")]: {
            fontSize: 12,
            lineHeight: 1.2,
          },
        })}
      >
        {product.title}
      </Typography>
      <Typography component="p" variant="subtitle2" sx={{ fontSize: 12, color: "text.secondary" }}>
        {formatCurrency(product.price)}
        <Typography component="span" variant="subtitle1" sx={{ fontSize: 9, ml: 0.75 }}>
          x{quantity}
        </Typography>
      </Typography>
    </Box>
  );
};

export default CartItemInfos;
