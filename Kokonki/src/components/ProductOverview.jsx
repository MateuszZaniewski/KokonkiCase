import ProductImages from "./ProductImages";
import ProductVariants from "./ProductVariants";
import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from "react";
import ProductInformation from "./ProductInformation";
import ProductRelated from "./ProductRelated";

export default function ProductOverview() {
  const [productName, setProductName] = useState("Drops Nepal");
  const [product, setProduct] = useState([]);
  const [visiblePage, setVisiblePage] = useState(1);
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

  if (product) {
    return (
      <div className="flex-col">
        <div className="flex pt-28 px-14 gap-24">
          <ProductImages product={product} />
          <ProductVariants product={product} />
        </div>
        <div className="w-full">
          <ProductInformation
            product={product}
            visiblePage={visiblePage}
            setVisiblePage={setVisiblePage}
          />
        </div>
        <div>
          <ProductRelated product={product} />
        </div>
      </div>
    );
  } else {
    return <div>No data</div>;
  }
}
