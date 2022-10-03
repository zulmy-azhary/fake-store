import { Stack } from "@mui/material";
import React from "react";
import { NavLink } from './';

const NavItem: React.FC = () => {
  return (
    <Stack direction="row" spacing={3}>
      <NavLink href="#" name="Store" />
      <NavLink href="#" name="About" />
    </Stack>
  );
};

export default NavItem;
