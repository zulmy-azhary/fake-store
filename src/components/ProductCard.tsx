import {
  ImageListItem,
  ImageListItemBar,
  Typography,
  Button,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import { CustomButton, NavLink } from "../components";
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
    <ImageListItem sx={{ width: 248, justifySelf: "center" }}>
      <img
        src={product.image}
        srcSet={product.image}
        alt={product.title}
        loading="lazy"
        style={{ objectFit: "contain", backgroundColor: "#FFF" }}
      />
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
                <CustomButton
                  size="small"
                  bgColor={theme.palette.error.main}
                  onClick={() => removeCart(product.id)}
                >
                  <DeleteIcon />
                </CustomButton>
                <Box display={"flex"} justifyContent="center" alignItems="center" columnGap={1}>
                  <CustomButton
                    size="small"
                    bgColor={theme.palette.primary.main}
                    onClick={() => decreaseQty(product.id)}
                  >
                    <RemoveIcon />
                  </CustomButton>
                  <Typography component="h6" variant="body1" sx={{ fontWeight: 700 }}>
                    {quantity}
                  </Typography>
                  <CustomButton
                    size="small"
                    bgColor={theme.palette.primary.main}
                    onClick={() => increaseQty(product.id)}
                  >
                    <AddIcon />
                  </CustomButton>
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
