import { Box, Typography } from "@mui/material";
import React from "react";
import { CustomButton, QuantityAction } from ".";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material/styles";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  id: number;
  quantity: number;
}

const ProductsAction: React.FC<Props> = ({ id, quantity }) => {
  const theme = useTheme();
  const { removeCart } = useShoppingCart();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", columnGap: 2 }}
    >
      <CustomButton
        bgColor={theme.palette.error.main}
        onClick={() => removeCart(id)}
        sx={{ "&:hover, &.Mui-focusVisible": { bgcolor: theme.palette.error.light } }}
      >
        <DeleteIcon />
      </CustomButton>
      <QuantityAction id={id} quantity={quantity}>
        <Typography component="span" variant="body1" sx={{ fontWeight: 700 }}>
          {quantity}
        </Typography>
      </QuantityAction>
    </Box>
  );
};

export default ProductsAction;
