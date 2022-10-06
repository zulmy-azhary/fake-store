import React from "react";
import type { ProductProps } from "../types";
import { Box, Typography } from "@mui/material";
import { CustomButton, QuantityAction } from ".";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useShoppingCart } from "../context";
import { useTheme } from "@mui/material/styles";
import { formatCurrency } from "../helper";

interface Props {
  product: ProductProps;
  quantity: number;
}

const CartAction: React.FC<Props> = ({ product, quantity }) => {
  const { removeCart } = useShoppingCart();
  const theme = useTheme();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        rowGap: 1,
        [theme.breakpoints.up("sm")]: {
          width: "auto",
          alignItems: "flex-end",
          flexDirection: "column",
        }
      })}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 2,
        }}
      >
        <CustomButton
          bgColor={theme.palette.error.main}
          onClick={() => removeCart(product.id)}
          sx={{ "&:hover, &.Mui-focusVisible": { bgcolor: theme.palette.error.light } }}
        >
          <DeleteForeverIcon sx={{ fontSize: 14 }} />
        </CustomButton>
        <QuantityAction size={14} id={product.id} quantity={quantity}>
          <Typography component="h6" variant="caption" sx={{ fontWeight: 500, flexGrow: 2 }}>
            {quantity}
          </Typography>
        </QuantityAction>
      </Box>
      <Typography component="h3" variant="body2" sx={{ fontSize: 16, fontWeight: 500 }}>
        {formatCurrency(product.price * quantity)}
      </Typography>
    </Box>
  );
};

export default CartAction;
