import React from "react";
import { Drawer, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavItem, Toggle } from ".";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isMobile: boolean;
}

const NavSide: React.FC<Props> = ({ isMobile }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
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
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={(theme) => ({
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            bgcolor: "background.default",
            px: 2,
            py: 3.5,
            width: 300,
          })}
          role="presentation"
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: 15,
              height: "100%"
            }}
          >
            <NavItem />
            {isMobile && <Toggle />}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default NavSide;
