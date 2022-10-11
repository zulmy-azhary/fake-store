import { Typography, ImageListItem, Box, Button, ListItemText } from "@mui/material";
import type { ProductProps } from "../types";
import { useParams } from "react-router-dom";
import { Image, NavLink, ProductRating, ProductsAction } from "../components";
import { useFetch } from "../hooks/useFetch";
import { productsUrl, formatCurrency } from "../helper";
import { useShoppingCart } from "../context";

const Details: React.FC = () => {
  const { getQuantity, increaseQty } = useShoppingCart();
  const { id } = useParams();
  const url = `${productsUrl}/${id}`;
  const { data, error } = useFetch<ProductProps>(url);

  if (!data) return <Typography variant="h5">Loading...</Typography>;
  if (error) return <Typography variant="h4">An error occurred...</Typography>;

  const quantity = getQuantity(data.id);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        columnGap: 7,
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
        },
      })}
    >
      <ImageListItem
        sx={(theme) => ({
          bgcolor: "#FFF",
          flexShrink: 0,
          "&:hover img": { transform: "scale(0.95)" },
          [theme.breakpoints.up("sm")]: {
            width: 450,
          },
        })}
      >
        <Image product={data} sx={{ height: 450 }} />
      </ImageListItem>
      <Box
        sx={(theme) => ({
          textAlign: "center",
          [theme.breakpoints.up("md")]: { textAlign: "start", flexShrink: 4 },
        })}
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {data.title}
        </Typography>
        <ProductRating
          sx={(theme) => ({ [theme.breakpoints.up("md")]: { justifyContent: "flex-start" } })}
          rate={data.rating.rate}
          count={data.rating.count}
        />
        <Typography variant="body2" sx={{ mt: 2 }}>
          {data.description}
        </Typography>
        <Box sx={{ display: "flex", mt: 15, justifyContent: "space-between" }}>
          <Typography variant="h4">{formatCurrency(data.price)}</Typography>
          {quantity ? (
            <ProductsAction quantity={quantity} id={data.id} />
          ) : (
            <Button
              sx={{
                borderRadius: 1,
                textAlign: "center",
                p: 0,
                flexGrow: 0.3,
              }}
              variant="contained"
              onClick={() => increaseQty(data.id)}
            >
              <ListItemText primary={"Add to cart"} />
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
