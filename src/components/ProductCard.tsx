import {
  ImageListItem,
  ImageListItemBar,
  Typography,
  Button,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import { NavLink } from "../components";
import { formatCurrency } from "../helper";
import type { ProductProps } from "../types";
import { useTheme } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useShoppingCart } from "../context";

interface Props {
  product: ProductProps;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const theme = useTheme();
  const { getQuantity, increaseQty, decreaseQty, removeCart } = useShoppingCart();
  const quantity = getQuantity(product.id);

  return (
    <ImageListItem sx={{ width: 248 }}>
      <img src={product.image} srcSet={product.image} alt={product.title} loading="lazy" />
      <ImageListItemBar
        title={
          <NavLink href={`/store/product/${product.id}`}>
            <Typography
              component="h4"
              variant="h4"
              sx={{ fontWeight: "bold", fontSize: 18, color: theme.palette.primary.main }}
              noWrap
            >
              {product.title}
            </Typography>
          </NavLink>
        }
        subtitle={
          <>
            <NavLink href={`/store/category/${product.category}`}>
              <Typography
                component="p"
                variant="subtitle1"
                sx={{ fontSize: 14, color: theme.palette.success.light }}
              >
                {product.category}
              </Typography>
            </NavLink>
            <Typography component="p" variant="h6">
              {formatCurrency(product.price)}
            </Typography>
            {!quantity ? (
              <Button
                sx={{
                  borderRadius: 1,
                  textAlign: "center",
                  p: 0,
                }}
                fullWidth
                variant="contained"
                onClick={() => increaseQty(product.id)}
              >
                <ListItemText primary={"Add to cart"} />
              </Button>
            ) : (
              <Box display={"flex"} justifyContent="space-between" alignItems="center">
                <IconButton
                  size="small"
                  sx={{
                    bgcolor: theme.palette.error.main,
                    color: "text.primary",
                    borderRadius: 1,
                  }}
                  onClick={() => removeCart(product.id)}
                >
                  <DeleteIcon sx={{ fontSize: 25.5 }} />
                </IconButton>
                <Box display={"flex"} justifyContent="center" alignItems="center" columnGap={1}>
                  <IconButton
                    size="small"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "text.primary",
                      borderRadius: 1,
                      p: 0.5,
                    }}
                    onClick={() => decreaseQty(product.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography component="h6" variant="body1" sx={{ fontWeight: 700 }}>
                    {quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      color: "text.primary",
                      borderRadius: 1,
                      p: 0.5,
                    }}
                    onClick={() => increaseQty(product.id)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </>
        }
        position="below"
      />
    </ImageListItem>
  );
};

export default ProductCard;
