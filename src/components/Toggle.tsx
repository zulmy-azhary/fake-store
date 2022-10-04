import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../context";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Toggle: React.FC = () => {
  const theme = useTheme();
  const { colorMode } = useThemeMode();

  return (
    <IconButton onClick={colorMode}>
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <ModeNightIcon />}
    </IconButton>
  );
};

export default Toggle;
