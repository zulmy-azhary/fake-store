import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ThemeContext } from "./context";
import { Home, Store, About } from "./pages";

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
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
          pt: 15,
          pb: 5,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
