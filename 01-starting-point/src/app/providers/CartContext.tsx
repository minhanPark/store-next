"use client";

import React, { createContext, useState } from "react";

import { Cart } from "@/api/types";

const useCartState = (initialCart: Cart) => useState<Cart>(initialCart);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

const CartProvider = ({
  children,
  initialCart,
}: {
  children: React.ReactNode;
  initialCart: Cart;
}) => {
  const [cart, setCart] = useCartState(initialCart);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
