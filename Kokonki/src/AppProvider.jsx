import { createContext, useState, useEffect } from "react";
import { supabase } from "./config/supabaseClient";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productName, setProductName] = useState("Drops Nepal");
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [visibleQuickCart, setVisibleQuickCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showAddedToCardModal, setShowAddedToCardModal] = useState(false);
  const [visibleHamburgerMenu, setVisibleHamburgerMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("resources")
        .select()
        .eq("name", productName);

      if (error) {
        console.log(error);
      }
      if (data) {
        setProduct(data);
      }
    };
    fetchData();
  }, [productName]);

  return (
    <AppContext.Provider
      value={{
        product,
        setProduct,
        productName,
        setProductName,
        cart,
        setCart,
        visibleQuickCart,
        setVisibleQuickCart,
        quantity,
        setQuantity,
        showAddedToCardModal,
        setShowAddedToCardModal,
        visibleHamburgerMenu,
        setVisibleHamburgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
