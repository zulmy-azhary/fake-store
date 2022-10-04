import { Link } from "@mui/material";
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  href: string;
}

const NavLink: React.FC<Props & React.PropsWithChildren> = ({ href, children }) => {
  return (
    <Link component={RouterLink} to={href} sx={{ textDecoration: "none", color: "text.primary" }}>
      {children}
    </Link>
  );
};

export default NavLink;
