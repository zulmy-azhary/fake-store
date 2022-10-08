import { Typography, ImageListItem } from "@mui/material";
import type { ProductProps } from "../types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, ProductRating } from "../components";

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

    return () => controller.abort();
  }, [id]);

  return (
    <>
      {!loading ? (
        <>
          <ImageListItem
            sx={(theme) => ({
              bgcolor: "#FFF",
              "&:hover img": { transform: "scale(0.95)" },
              [theme.breakpoints.up("sm")]: {
                width: 450,
              },
            })}
          >
            <Image product={product} sx={{ height: 450 }} />
          </ImageListItem>
          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: 24 }}>
            {product.title}
          </Typography>
          <ProductRating rate={product.rating.rate} count={product.rating.count} />
        </>
      ) : (
        <Typography variant="h5">Loading...</Typography>
      )}
    </>
  );
};

export default Details;
