import {
  ImageListItem,
  ImageListItemBar,
  Typography,
  Button,
  ListItemText,
  Box,
  Rating,
} from "@mui/material";
import { Image, NavLink, ProductRating, ProductsAction } from ".";
import { formatCurrency } from "../helper";
import type { ProductProps } from "../types";
import { useShoppingCart } from "../context";
import Tooltip from "@mui/material/Tooltip/Tooltip";

interface Props {
  product: ProductProps;
}

const ProductsCard: React.FC<Props> = ({ product }) => {
  const { getQuantity, increaseQty } = useShoppingCart();
  const quantity = getQuantity(product.id);

  return (
    <ImageListItem sx={{ width: 248, justifySelf: "center" }}>
      <NavLink
        href={`/store/product/${product.id}`}
        sx={{ backgroundColor: "#FFF", height: "100%" }}
      >
        <Tooltip title={product.title} arrow followCursor>
          <Image product={product} />
        </Tooltip>
      </NavLink>
      <ImageListItemBar
        title={
          <NavLink href={`/store/product/${product.id}`}>
            <Typography
              component="h4"
              variant="h4"
              sx={(theme) => ({
                fontWeight: "bold",
                fontSize: 18,
                color: theme.palette.primary.main,
              })}
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
                sx={(theme) => ({ fontSize: 14, color: theme.palette.success.light })}
              >
                {product.category}
              </Typography>
            </NavLink>
            <ProductRating rate={product.rating.rate} count={product.rating.count} />
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
              <ProductsAction id={product.id} quantity={quantity} />
            )}
          </>
        }
        position="below"
      />
    </ImageListItem>
  );
};

export default ProductsCard;
