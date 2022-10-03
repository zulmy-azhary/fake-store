import { Link, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

interface Props {
  href: string;
  name: string | React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, name }) => {
  return (
    <Link href={href} sx={{ textDecoration: "none", color: "text.primary" }}>
      <ListItemButton sx={{ borderRadius: 1 }}>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default NavLink;
