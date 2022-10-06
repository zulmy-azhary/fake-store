import {
  ImageListItem,
  ImageListItemBar,
  Typography,
  Button,
  ListItemText,
  Box,
} from "@mui/material";
import { NavLink, ProductsAction } from ".";
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
        <Tooltip title={product.title} arrow>
          <Box
            component="img"
            sx={{
              objectFit: "contain",
              transform: "scale(0.8)",
              width: "100%",
              height: "100%",
              transitionDuration: "300ms",
              "&:hover": { transform: "scale(1)" },
            }}
            src={product.image}
            srcSet={product.image}
            alt={product.title}
            loading="lazy"
          />
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
