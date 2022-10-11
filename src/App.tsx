import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ProductsProvider, ShoppingCartProvider as CartProvider, useThemeMode } from "./context";
import { Home, Store, About, Products, ProductDetails, Categories } from "./pages";

const App: React.FC = () => {
  const { theme } = useThemeMode();
  const mainTheme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                display: "flex",
                minWidth: 320,
                minHeight: "100vh",
              },
              "#root": {
                width: "100%",
              },
            },
          },
        },
        palette: {
          mode: theme,
        },
        typography: {
          fontFamily: "Inter",
          fontSize: 16,
          fontWeightRegular: 400,
          fontWeightBold: 700,
        },
      }),
    [theme]
  );

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <CartProvider>
        <ProductsProvider>
          <Navbar />
        </ProductsProvider>
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            pt: 20,
            pb: 5,
          }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="store"
              element={
                <ProductsProvider>
                  <Store />
                </ProductsProvider>
              }
            >
              <Route index element={<Products />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="category/:id" element={<Categories />} />
              <Route path="*" element={<Navigate to={"/store"} replace={true} />} />
            </Route>
            <Route path="about" element={<About />} />
          </Routes>
        </Container>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
