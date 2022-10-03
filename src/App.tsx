import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useMemo, useContext } from "react";
import { Navbar } from "./components";
import { ThemeContext } from "./context";

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
        maxWidth="md"
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
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Hello World
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
