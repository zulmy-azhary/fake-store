import { Box, Container, Stack } from "@mui/material";
import { Cart, NavItem, Toggle, NavLink } from "./";
import reactLogo from "../assets/react.svg";

const Navbar: React.FC = () => {
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
        <NavLink href="#" name={<img src={reactLogo} alt="Marketplace Logo" />} />
        <NavItem />
        <Stack direction="row" spacing={3}>
          <Cart />
          <Toggle />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
