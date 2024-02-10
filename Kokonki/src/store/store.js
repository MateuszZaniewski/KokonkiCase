import { create } from "zustand";

// const { name } = useParams();
// const [productName, setProductName] = useState(name);
// const [product, setProduct] = useState([]);
// const [visiblePage, setVisiblePage] = useState(1);
// const [cart, setCart] = useState([]);
// const [visibleQuickCart, setVisibleQuickCart] = useState(false);
// const [quantity, setQuantity] = useState(1);
// const [showAddedToCardModal, setShowAddedToCardModal] = useState(false);
// const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState(false);

export const useCartStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useProductStore = create((set) => ({
  product: 1,
}));

export const useVisibilityStore = create((set) => ({
  visiblePage: 1,
  setVisiblePage: (newValue) =>
    set((state) => ({ visiblePage: (state.visiblePage = newValue) })),
}));
