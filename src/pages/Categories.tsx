import { Typography, ImageList } from "@mui/material";
import { useParams } from "react-router-dom";
import type { ProductProps } from "../types";
import { useFetch } from "../hooks/useFetch";
import { breakpoints, productsUrl } from "../helper";
import { ProductsCard } from "../components";

const Categories: React.FC = () => {
  const { id } = useParams();
  const url = `${productsUrl}/category/${id}`;
  const { data, error } = useFetch<ProductProps[]>(url);
  const mediaState = breakpoints(1, 2, 3, 4) as number;

  if (!data) return <Typography variant="h5">Loading...</Typography>;
  if (error) return <Typography variant="h4">An error occurred...</Typography>;

  return (
    <>
      <Typography variant="overline" sx={{ fontWeight: 600, fontSize: 24 }}>
        Category: "{id}"
      </Typography>
      <ImageList cols={mediaState} gap={24} sx={{ width: "100%", overflowY: "initial", mt: 6 }}>
        {data.map((item: ProductProps) => (
          <ProductsCard product={item} key={item.id} />
        ))}
      </ImageList>
    </>
  );
};

export default Categories;
