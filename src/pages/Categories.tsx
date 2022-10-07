import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ProductProps } from "../types";

const Categories: React.FC = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState<ProductProps[]>([]);
  console.log(categories);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
  }, []);

  return (
    <Typography variant="h3" sx={{ fontWeight: 700 }}>
      Product Categories
    </Typography>
  );
};

export default Categories;
