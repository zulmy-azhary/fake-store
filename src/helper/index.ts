import { useMediaQuery, useTheme } from "@mui/material";
import type { Breakpoint } from "../types";

export const productsUrl = "https://fakestoreapi.com/products";

const CURRENCY = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number): string => {
  return CURRENCY.format(number);
};

export const breakpoints = (sm: Breakpoint, md?: Breakpoint, lg?: Breakpoint, xl?: Breakpoint) => {
  const theme = useTheme();
  const smBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const mdBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const lgBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));

  if (smBreakpoint) return sm;
  if (mdBreakpoint) return md !== undefined ? md : sm;
  if (lgBreakpoint) return lg !== undefined ? lg : md;

  return xl === undefined ? lg : xl;
};