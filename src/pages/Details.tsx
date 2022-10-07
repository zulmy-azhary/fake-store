import { Typography } from "@mui/material";
import type { ProductProps } from "../types";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details: React.FC = () => {
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <Typography variant="h3" sx={{ fontWeight: 700, fontSize: 24 }}>
      {product.title}
    </Typography>
  );
};

export default Details;
