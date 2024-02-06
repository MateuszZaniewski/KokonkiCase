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
        <div className="flex xl:flex-row flex-col pt-28 xl:px-14 gap-24 relative">
          <ProductImages />
          <ProductVariants />
        </div>
        <div className="xl:w-1/2 xl:block">
          <ProductInformation />
        </div>
        <div className="flex flex-wrap xl:flex-nowrap">
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
