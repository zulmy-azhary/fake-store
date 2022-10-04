import { Box, ImageList } from '@mui/material';
import React from 'react'
import { useShoppingCart } from '../context';
import type { CartItemProps } from '../types';
import { CartItem } from './';

const CartList: React.FC = () => {
  const { cartItems } = useShoppingCart();
  return (
    <ImageList cols={1} gap={24} sx={{ width: "100%", overflowY: "initial" }}>
      {cartItems.map((item: CartItemProps) => (
        <CartItem key={item.id} {...item} />
      ))}
    </ImageList>
  )
}

export default CartList;