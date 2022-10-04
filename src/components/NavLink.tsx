import { Link, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  href: string;
  name: string | React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, name }) => {
  return (
    <Link component={RouterLink} to={href} sx={{ textDecoration: "none", color: "text.primary" }}>
      <ListItemButton sx={{ borderRadius: 1 }}>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default NavLink;
