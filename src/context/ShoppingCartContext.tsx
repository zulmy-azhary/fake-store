import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { CartItemProps } from "../types";
import { useContext } from "react";

interface ShoppingCartCtx {
  getQuantity: (id: number) => number;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemProps[]
}

const ShoppingCartContext = createContext<ShoppingCartCtx>({} as ShoppingCartCtx);

export const useShoppingCart = (): ShoppingCartCtx => useContext(ShoppingCartContext);

const ShoppingCartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItemProps[]>("Cart Items", []);
  const cartQuantity = cartItems.reduce(
    (total: number, item: CartItemProps): number => item.quantity + total,
    0
  );

  const getQuantity = (id: number): number => {
    return cartItems.find((item: CartItemProps) => item.id === id)?.quantity || 0;
  };

  const increaseQty = (id: number): void => {
    setCartItems((prev) => {
      if (!prev.find((item: CartItemProps) => item.id === id))
        return [...prev, { id, quantity: 1 }];

      return prev.map((item: CartItemProps) => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    });
  };

  const decreaseQty = (id: number): void => {
    setCartItems((prev) => {
      if (prev.find((item: CartItemProps) => item.id === id)?.quantity === 1)
        return prev.filter((item: CartItemProps) => item.id !== id);

      return prev.map((item: CartItemProps) => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        return item;
      });
    });
  };

  const removeCart = (id: number): void => {
    setCartItems((prev) => {
      return prev.filter((item: CartItemProps) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getQuantity, increaseQty, decreaseQty, removeCart, cartQuantity, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
