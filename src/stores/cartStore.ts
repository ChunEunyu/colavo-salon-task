import { create } from 'zustand';
import { CartItemsType, CartDiscountsType } from '../types';

interface CartStore {
  cartItems: CartItemsType;
  cartDiscounts: CartDiscountsType;
  setCartItems: (newItems: CartItemsType) => void;
  setCartDiscounts: (newDiscounts: CartDiscountsType) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  cartDiscounts: [],
  setCartItems: (newItems) => set({ cartItems: newItems }),
  setCartDiscounts: (newDiscounts) => set({ cartDiscounts: newDiscounts }),
}));
