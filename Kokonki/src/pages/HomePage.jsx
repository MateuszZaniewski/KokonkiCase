import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import Footer from "../components/Footer";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ObserverInsta from "../components/ObserverInsta";
import ProductOverview from "../components/ProductOverview";

export default function HomePage() {
  const [productName, setProductName] = useState("Drops Nepal");
  const [product, setProduct] = useState([]);
  const [visiblePage, setVisiblePage] = useState(1);
  const [cart, setCart] = useState([1]);
  const [visibleQuickCart, setVisibleQuickCart] = useState(false);
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
    <div className="font-inter bg-[#F9F8F9] max-w-[1440px] mx-auto xl:min-h-[100vh]">
      <Navbar
        product={product}
        cart={cart}
        setCart={setCart}
        visibleQuickCart={visibleQuickCart}
        setVisibleQuickCart={setVisibleQuickCart}
      />
      <Links />
      <ProductOverview
        product={product}
        visiblePage={visiblePage}
        setVisiblePage={setVisiblePage}
      />
      <Newsletter />
      <ObserverInsta />
      <Footer />
    </div>
  );
}
