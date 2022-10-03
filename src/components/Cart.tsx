import { Box, Badge, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

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
        <Badge badgeContent={4} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 320, height: "100%", bgcolor: "background.default", px: 3, py: 5 }}
          role="presentation"
        >
          Cart
        </Box>
      </Drawer>
    </>
  );
};

export default Cart;
