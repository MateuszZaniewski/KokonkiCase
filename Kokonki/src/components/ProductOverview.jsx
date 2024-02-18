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
        <div className="relative flex flex-col gap-24 pt-28 xl:flex-row xl:px-14">
          <ProductImages />
          <ProductVariants />
        </div>
        <div className="xl:block xl:w-1/2">
          <ProductInformation />
        </div>
        <div className="mx-auto flex flex-wrap md:w-[450px] lg:w-[600px] xl:w-full xl:flex-nowrap xl:px-5">
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
