import { Link, SxProps, Theme } from "@mui/material";
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  href: string;
  sx?: SxProps<Theme>;
}

const NavLink: React.FC<Props & React.PropsWithChildren> = ({ href, children, sx }) => {
  return (
    <Link
      component={RouterLink}
      to={href}
      sx={[{ textDecoration: "none", color: "text.primary" }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </Link>
  );
};

export default NavLink;
