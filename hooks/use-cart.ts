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
              total: parseFloat((state.total + product.price).toFixed(2)),
            };
          }

          return {
            ...state,
            items: [...state.items, { product, quantity: 1 }],
            total: parseFloat((state.total + product.price).toFixed(2)),
          };
        }),
      removeItem: (productId: string) =>
        set((state) => {
          const item = state.items.find((i) => i.product.id === productId);
          if (!item) return state;

          return {
            ...state,
            items: state.items.filter((i) => i.product.id !== productId),
            total: parseFloat((state.total - item.product.price * item.quantity).toFixed(2)),
          };
        }),
      updateQuantity: (productId: string, quantity: number) =>
        set((state) => {
          const item = state.items.find((i) => i.product.id === productId);
          if (!item) return state;

          const newQuantity = Math.max(1, quantity);
          const quantityDiff = newQuantity - item.quantity;
          
          return {
            ...state,
            items: state.items.map((i) =>
              i.product.id === productId ? { ...i, quantity: newQuantity } : i
            ),
            total: parseFloat((state.total + item.product.price * quantityDiff).toFixed(2)),
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);