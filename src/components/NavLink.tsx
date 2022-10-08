import { Link, SxProps, Theme } from "@mui/material";
import React, { forwardRef } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface Props {
  href: string;
  sx?: SxProps<Theme>;
}

const NavLink: React.ForwardRefRenderFunction<
  HTMLAnchorElement,
  Props & React.PropsWithChildren
> = (props, ref) => {
  const { href, sx, children } = props;
  return (
    <Link
      ref={ref}
      component={RouterLink}
      to={href}
      sx={[{ textDecoration: "none", color: "text.primary" }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...props}
    >
      {children}
    </Link>
  );
};

export default forwardRef(NavLink);
