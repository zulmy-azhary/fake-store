import { Typography, Rating, Box } from "@mui/material";
import type { ProductProps } from "../types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;
    setLoading(true);

    fetch(`https://fakestoreapi.com/products/${id}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
      });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      {!loading ? (
        <>
          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: 24 }}>
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", columnGap: 0.5 }}>
            <Rating
              name="read-only"
              defaultValue={product.rating.rate}
              precision={0.5}
              readOnly
              size="small"
              max={5}
            />
            <Typography component="p" variant="caption" fontSize="small" color="text.secondary">
              {product.rating.rate} | {product.rating.count} ratings
            </Typography>
          </Box>
        </>
      ) : (
        <Typography variant="h5">Loading...</Typography>
      )}
    </>
  );
};

export default Details;
