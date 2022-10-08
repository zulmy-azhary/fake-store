import React, { forwardRef } from "react";
import type { ProductProps } from "../types";
import { Box } from "@mui/material";

interface Props {
  product: ProductProps;
}

const Image: React.ForwardRefRenderFunction<HTMLImageElement, Props> = (props, ref) => {
  return (
    <Box
      ref={ref}
      component="img"
      sx={{
        objectFit: "contain",
        transform: "scale(0.8)",
        width: "100%",
        height: "100%",
        transitionDuration: "300ms",
        "&:hover": { transform: "scale(0.95)" },
      }}
      src={props.product.image}
      alt={props.product.title}
      {...props}
      loading="lazy"
    />
  );
};

export default forwardRef(Image);
