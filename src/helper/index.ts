import { useMediaQuery, useTheme } from "@mui/material";

const CURRENCY = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number): string => {
  return CURRENCY.format(number);
};

export const breakpoints = (
  sm: number | string | boolean,
  md?: number | string | boolean,
  lg?: number | string | boolean,
  xl?: number | string | boolean
) => {
  const theme = useTheme();
  const smBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const mdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const lgBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  if (smBreakpoint) return sm;
  if (mdBreakpoint) return md;
  if (lgBreakpoint) return lg;

  return xl;
};
