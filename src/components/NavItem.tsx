import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from './';

const NavItem: React.FC = () => {
  return (
    <Stack direction="row" spacing={1}>
      <NavLink href="/store" name="Store" />
      <NavLink href="/about" name="About" />
    </Stack>
  );
};

export default NavItem;
