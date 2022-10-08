import React from "react";
import type { ProductProps } from "../types";
import { Box, SxProps, Theme } from "@mui/material";

interface Props {
  product: ProductProps;
  sx?: SxProps<Theme>;
}

const Image: React.FC<Props> = ({ product, sx }) => {
  return (
    <Box
      component="img"
      sx={[
        {
          objectFit: "contain",
          transform: "scale(0.8)",
          width: "100%",
          height: "100%",
          transitionDuration: "300ms",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      src={product.image}
      alt={product.title}
      loading="lazy"
    />
  );
};

export default Image;
