import { Stack, ListItemText } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { NavLink } from ".";
import { useTheme } from "@mui/material/styles";

const NavItem: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack direction={isTablet ? "column" : "row"} spacing={isMobile ? 4 : 6} alignItems="center">
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
