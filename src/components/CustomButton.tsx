import { IconButton, SxProps, Theme } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";

interface Props {
  onClick: () => void;
  bgColor?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const CustomButton: React.FC<React.PropsWithChildren & Props> = ({
  children,
  onClick,
  bgColor,
  disabled,
  sx = [],
}) => {
  return (
    <IconButton
      size="small"
      sx={[
        (theme) => ({
          bgcolor: bgColor,
          color: theme.palette.background.paper,
          borderRadius: 1,
          p: 0.5,
          "&:disabled": {
            bgcolor: theme.palette.mode === "dark" ? blueGrey[900] : blueGrey[50],
            color: theme.palette.mode === "dark" ? blueGrey.A400 : blueGrey.A200,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      onClick={onClick}
      disabled={disabled}
      aria-label="Action Button"
    >
      {children}
    </IconButton>
  );
};

export default CustomButton;
