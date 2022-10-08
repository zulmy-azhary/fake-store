import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { Cart, NavItem, NavSide, Toggle, NavLink } from ".";
import reactLogo from "../assets/react.svg";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        boxShadow: 3,
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
            startIcon={<img src={reactLogo} alt="Marketplace Logo" width={36} height={32} />}
          >
            <Typography sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
              Fake Store
            </Typography>
          </Button>
        </NavLink>
        {!isTablet && <NavItem />}
        <Stack direction="row" spacing={3} alignItems={"center"}>
          <Cart />
          {!isMobile && <Toggle />}
          {isTablet && <NavSide isMobile={isMobile} />}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
