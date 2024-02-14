import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item, quantity, price, image) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === item
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += quantity;
        return { cart: updatedCart };
      } else {
        return {
          cart: [
            ...state.cart,
            { name: item, quantity: quantity, price: price, image: image },
          ],
        };
      }
    }),
  increaseQuantity: (item, amount) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === item
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += amount;
        return { cart: updatedCart };
      } else {
        return {};
      }
    });
  },
  decreseQuantity: (item, amount) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.name === item
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity -= amount;
        return { cart: updatedCart };
      } else {
        return {};
      }
    });
  },
  deleteItem: (name) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.name !== name);
      return { cart: updatedCart };
    });
  },
}));

export const useProductStore = create((set) => ({
  productName: "",
  changeProductName: (name) =>
    set((state) => ({ productName: (state.productName = name) })),
}));

export const useVisibilityStore = create((set) => ({
  visiblePage: 1,
  changeVisiblePage: (newValue) =>
    set((state) => ({ visiblePage: (state.visiblePage = newValue) })),
}));
