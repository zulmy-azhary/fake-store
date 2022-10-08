import { Box, Typography, Rating } from "@mui/material";
import React from "react";
import type { ProductRatingProps } from "../types";

const ProductRating: React.FC<ProductRatingProps> = ({ rate, count }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", columnGap: 0.5 }}>
      <Rating
        name="read-only"
        defaultValue={rate}
        precision={0.5}
        readOnly
        size="small"
        max={5}
      />
      <Typography component="p" variant="caption" fontSize="small" color="text.secondary">
        {rate ?? 0} | {count ?? 0} ratings
      </Typography>
    </Box>
  );
};

export default ProductRating;
