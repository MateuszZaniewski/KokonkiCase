import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      step: 0,
      nextStep: (next) => set((state) => ({ step: (state.step = next) })),
      prevStep: (prev) => set((state) => ({ step: (state.step = prev) })),
      resetStep: () => {
        set((state) => {
          return { ...state, step: 0 };
        });
      },
      addToCart: (item, quantity, price, image) =>
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (cartItem) => cartItem.name === item,
          );
          if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity += quantity;
            return { cart: updatedCart };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  name: item,
                  quantity: quantity,
                  price: price,
                  image: image,
                },
              ],
            };
          }
        }),
      increaseQuantity: (item, amount) => {
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (cartItem) => cartItem.name === item,
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
      decreaseQuantity: (item, amount) => {
        set((state) => {
          const existingItemIndex = state.cart.findIndex(
            (cartItem) => cartItem.name === item,
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
    }),
    {
      name: "cart-state",
      getStorage: () => localStorage,
    },
  ),
);

// export const useProductStore = create((set) => ({
//   productName: "",
//   changeProductName: (name) =>
//     set((state) => ({ productName: (state.productName = name) })),
// }));

export const useVisibilityStore = create((set) => ({
  visiblePage: 1,
  changeVisiblePage: (newValue) =>
    set((state) => ({ visiblePage: (state.visiblePage = newValue) })),
}));
