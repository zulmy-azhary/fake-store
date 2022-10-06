import { Box, Badge, Drawer, IconButton, Typography } from "@mui/material";
import { CartList, TotalCart } from ".";
import { useState } from "react";
import { useShoppingCart } from "../context";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Cart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartQuantity } = useShoppingCart();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggleDrawer = (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
    if (
      e.type === "keydown" &&
      ((e as React.KeyboardEvent).key === "Tab" || (e as React.KeyboardEvent).key === "Shift")
    )
      return;

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
          sx={(theme) => ({
            height: "100%",
            overflowX: "hidden",
            bgcolor: "background.default",
            px: 2,
            py: 2.5,
            width: "100vw",
            [theme.breakpoints.up("sm")]: {
              width: cartQuantity ? "100%" : 512,
            },
          })}
          role="presentation"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography component="h2" variant="overline" fontSize={20} fontWeight="bold">
              Cart List
            </Typography>
            <CloseIcon onClick={toggleDrawer(false)} sx={{ cursor: "pointer" }} />
          </Box>
          <Box
            sx={{
              pt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 5,
            }}
          >
            <CartList />
            <TotalCart />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
