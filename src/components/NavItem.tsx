import { Stack, ListItemText } from "@mui/material";
import React from "react";
import { NavLink } from "./";

const NavItem: React.FC = () => {
  return (
    <Stack direction="row" spacing={6}>
      <NavLink href="/store">
        <ListItemText primary={"Store"} />
      </NavLink>
      <NavLink href="/about">
        <ListItemText primary={"About"} />
      </NavLink>
    </Stack>
  );
};

export default NavItem;
