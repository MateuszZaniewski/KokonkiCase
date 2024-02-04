import ProductImages from "./ProductImages";
import ProductVariants from "./ProductVariants";
import ProductInformation from "./ProductInformation";
import ProductRelated from "./ProductRelated";
import ProductOpinions from "./ProductOpinions";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ProductOverview() {
  const { product } = useContext(AppContext);
  if (product) {
    return (
      <div className="flex-col">
        <div className="flex pt-28 px-14 gap-24 relative">
          <ProductImages />
          <ProductVariants />
        </div>
        <div className="w-1/2">
          <ProductInformation />
        </div>
        <div>
          <ProductRelated />
        </div>
        <div>
          <ProductOpinions />
        </div>
      </div>
    );
  } else {
    return <div>No data</div>;
  }
}
