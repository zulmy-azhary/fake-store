import {
  Box,
  Container,
  Stack,
  useMediaQuery,
  Typography,
  Button,
} from "@mui/material";
import { Cart, NavItem, Toggle, NavLink } from "./";
import reactLogo from "../assets/react.svg";
import { useTheme } from "@mui/material/styles";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        borderBottom: "1px solid",
        bgcolor: "background.default",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
        }}
      >
        <NavLink href="/">
          <Button
            sx={{ borderRadius: 1 }}
            startIcon={<img src={reactLogo} alt="Marketplace Logo" />}
          >
            <Typography sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
              Fake Store
            </Typography>
          </Button>
        </NavLink>
        {!sm && <NavItem />}
        <Stack direction="row" spacing={3}>
          <Cart />
          {!sm && <Toggle />}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
