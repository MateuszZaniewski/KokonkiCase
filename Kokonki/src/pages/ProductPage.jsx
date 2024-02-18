import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import Footer from "../components/Footer";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ObserverInsta from "../components/ObserverInsta";
import ProductOverview from "../components/ProductOverview";
import { AppContext } from "./../context/AppContext";
import AddedToCardModal from "../components/Boxes/AddedToCardModal";

export default function ProductPage() {
  const { name } = useParams();
  const [productName, setProductName] = useState(name);
  const [product, setProduct] = useState([]);
  const [visiblePage, setVisiblePage] = useState(1);
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
        console.log(data);
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
        visiblePage,
        setVisiblePage,
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
      <div className="mx-auto max-w-[1440px] bg-[#F9F8F9] font-inter xl:min-h-[100vh]">
        {showAddedToCardModal ? <AddedToCardModal /> : null}

        <Navbar />
        <Links />
        <ProductOverview />
        <Newsletter />
        <ObserverInsta />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
