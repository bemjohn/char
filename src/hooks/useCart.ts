'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, CustomerInfo, CartState, MenuItem } from '@/types';

const initialCustomerInfo: CustomerInfo = {
  fullName: '',
  deliveryAddress: '',
  specialInstructions: '',
};

interface CartStore extends CartState {
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  updateCustomerInfo: (info: Partial<CustomerInfo>) => void;
  toggleCart: () => void;
  getSubtotal: () => number;
  getTotalItems: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      customerInfo: initialCustomerInfo,
      isOpen: false,

      addItem: (item) => set((state) => {
        const existing = state.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          };
        }
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),

      removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),

      updateQuantity: (id, quantity) => set((state) => ({
        items: quantity <= 0
          ? state.items.filter((i) => i.id !== id)
          : state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      })),

      clearCart: () => set({ items: [], customerInfo: initialCustomerInfo }),

      updateCustomerInfo: (info) => set((state) => ({
        customerInfo: { ...state.customerInfo, ...info },
      })),

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getSubtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'food-app-cart',
      partialize: (state) => ({ items: state.items, customerInfo: state.customerInfo }),
    }
  )
);