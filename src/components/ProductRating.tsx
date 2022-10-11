import { Box, Typography, Rating, SxProps, Theme } from "@mui/material";
import React from "react";
import type { ProductRatingProps } from "../types";

interface Props {
  sx?: SxProps<Theme>;
}

const ProductRating: React.FC<ProductRatingProps & Props> = ({ rate, count, sx }) => {
  return (
    <Box
      sx={[
        { display: "flex", justifyContent: "center", alignItems: "center", columnGap: 0.5 },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Rating name="read-only" defaultValue={rate} precision={0.5} readOnly size="small" max={5} />
      <Typography component="p" variant="caption" fontSize="small" color="text.secondary">
        {rate ?? 0} | {count ?? 0} ratings
      </Typography>
    </Box>
  );
};

export default ProductRating;
