'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState, Product } from '@/types';

interface CartStore extends CartState {
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      total: 0,
      addItem: (product: Product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              ...state,
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + product.price,
            };
          }

          return {
            ...state,
            items: [...state.items, { product, quantity: 1 }],
            total: state.total + product.price,
          };
        }),
      removeItem: (productId: string) =>
        set((state) => {
          const item = state.items.find((i) => i.product.id === productId);
          if (!item) return state;

          return {
            ...state,
            items: state.items.filter((i) => i.product.id !== productId),
            total: state.total - item.product.price * item.quantity,
          };
        }),
      updateQuantity: (productId: string, quantity: number) =>
        set((state) => {
          const item = state.items.find((i) => i.product.id === productId);
          if (!item) return state;

          const quantityDiff = quantity - item.quantity;
          return {
            ...state,
            items: state.items.map((i) =>
              i.product.id === productId ? { ...i, quantity } : i
            ),
            total: state.total + item.product.price * quantityDiff,
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);