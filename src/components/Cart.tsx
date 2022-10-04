import { Box, Badge, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "../context";
import CloseIcon from "@mui/icons-material/Close";
import { CartList } from './';

const Cart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cartQuantity } = useShoppingCart();

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
          rowGap={10}
          sx={{ width: 512, height: "100%", overflowX: "hidden", bgcolor: "background.default", px: 3, pt: 5, pb: 10 }}
          role="presentation"
        >
          <Box display="flex" justifyContent="space-between">
            <Typography component="h2" variant="body1">Cart List</Typography>
            <CloseIcon onClick={toggleDrawer(false)} sx={{ cursor: "pointer" }} />
          </Box>
          <CartList />
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
