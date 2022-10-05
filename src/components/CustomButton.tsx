import { IconButton } from "@mui/material";
import React from "react";

interface Props {
  onClick: () => void;
  bgColor: string;
  size?: "small" | "medium" | "large";
}

const CustomButton: React.FC<React.PropsWithChildren & Props> = ({
  children,
  onClick,
  size,
  bgColor,
}) => {
  return (
    <IconButton
      size={size}
      sx={{
        bgcolor: bgColor,
        color: "text.primary",
        borderRadius: 1,
        p: 0.5,
      }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

export default CustomButton;
