import { Box, Badge, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProducts, useShoppingCart } from "../context";
import CloseIcon from "@mui/icons-material/Close";
import { CartList } from "./";
import { formatCurrency } from "../helper/index";
import type { CartItemProps, ProductProps } from "../types";

const Cart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartItems, cartQuantity } = useShoppingCart();
  const { products } = useProducts();

  const toggleDrawer = (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
    if (
      e.type === "keydown" &&
      ((e as React.KeyboardEvent).key === "Tab" || (e as React.KeyboardEvent).key === "Shift")
    ) return;

    setOpen(open);
  };
  return (
    <>
      <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
        <Badge badgeContent={cartQuantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          rowGap={8}
          width={512}
          height="100%"
          sx={{ overflowX: "hidden", bgcolor: "background.default", px: 2, pt: 2.5, pb: 10 }}
          role="presentation"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography component="h2" variant="overline" fontSize={20} fontWeight="bold">
              Cart List
            </Typography>
            <CloseIcon onClick={toggleDrawer(false)} sx={{ cursor: "pointer" }} />
          </Box>
          <CartList />
          <Box display="flex" columnGap={5} justifyContent="flex-end">
            <Typography component="p" variant="body1" textAlign="center" sx={{ fontWeight: "bold", color: "text.primary" }}>
              Total
            </Typography>
            <Typography component="p" variant="body1" textAlign="center" sx={{ fontWeight: "bold", color: "text.primary" }}>
              {formatCurrency(
                cartItems.reduce((total: number, cartItem: CartItemProps) => {
                  const product = products.find(
                    (product: ProductProps) => product.id === cartItem.id
                  );
                  return total + (product?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
