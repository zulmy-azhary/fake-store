import { Box } from "@mui/material";
import React from "react";
import { CustomButton } from ".";
import { useShoppingCart } from "../context";
import { useTheme } from "@mui/material/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  id: number;
  quantity: number;
  size?: number | string;
}

const QuantityAction: React.FC<React.PropsWithChildren & Props> = ({
  id,
  quantity,
  children,
  size,
}) => {
  const { increaseQty, decreaseQty } = useShoppingCart();
  const theme = useTheme();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", columnGap: 1 }}
    >
      <CustomButton
        bgColor={theme.palette.primary.main}
        onClick={() => decreaseQty(id)}
        disabled={quantity <= 1 && true}
        sx={{ "&:hover, &.Mui-focusVisible": { bgcolor: theme.palette.primary.dark } }}
      >
        <RemoveIcon sx={{ fontSize: size }} />
      </CustomButton>
      {children}
      <CustomButton
        bgColor={theme.palette.primary.main}
        onClick={() => increaseQty(id)}
        sx={{ "&:hover, &.Mui-focusVisible": { bgcolor: theme.palette.primary.dark } }}
      >
        <AddIcon sx={{ fontSize: size }} />
      </CustomButton>
    </Box>
  );
};

export default QuantityAction;
