import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ProductsProvider, ShoppingCartProvider as CartProvider, useThemeMode } from "./context";
import { Home, Store, About, Details, Categories } from "./pages";

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
      <ProductsProvider>
        <CartProvider>
          <Navbar />
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
              <Route path="store" element={<Store />} />
              <Route path="store/product/:id" element={<Details />} />
              <Route path="store/category/:id" element={<Categories />} />
              <Route path="about" element={<About />} />
            </Routes>
          </Container>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
};

export default App;
