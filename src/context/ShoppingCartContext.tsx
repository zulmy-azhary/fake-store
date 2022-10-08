import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContext } from "react";
import type { CartItemProps } from "../types";

type CartAction<T, R> = (id: T) => R;

interface ShoppingCartCtx {
  getQuantity: CartAction<number, number>;
  increaseQty: CartAction<number, void>;
  decreaseQty: CartAction<number, void>;
  removeCart: CartAction<number, void>;
  cartQuantity: number;
  cartItems: CartItemProps[];
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
    return cartItems.find((item: CartItemProps): boolean => item.id === id)?.quantity || 0;
  };

  const increaseQty = (id: number): void => {
    setCartItems(prev => {
      if (!prev.find((item: CartItemProps): boolean => item.id === id))
        return [...prev, { id, quantity: 1 }];

      return prev.map((item: CartItemProps): CartItemProps => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        return item;
      });
    });
  };

  const decreaseQty = (id: number): void => {
    setCartItems(prev => {
      if (prev.find((item: CartItemProps): boolean => item.id === id)?.quantity === 1)
        return prev.filter((item: CartItemProps) => item.id !== id);

      return prev.map((item: CartItemProps): CartItemProps => {
        if (item.id === id) return { ...item, quantity: item.quantity - 1 };
        return item;
      });
    });
  };

  const removeCart = (id: number): void => {
    setCartItems(prev => {
      return prev.filter((item: CartItemProps): boolean => item.id !== id);
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
