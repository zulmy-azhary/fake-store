const CURRENCY = Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export const formatCurrency = (number: number): string => {
  return CURRENCY.format(number);
};
