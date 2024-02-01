import ProductImages from "./ProductImages";
import ProductVariants from "./ProductVariants";
import ProductInformation from "./ProductInformation";
import ProductRelated from "./ProductRelated";
import ProductOpinions from "./ProductOpinions";

export default function ProductOverview({
  product,
  visiblePage,
  setVisiblePage,
}) {
  if (product) {
    return (
      <div className="flex-col">
        <div className="flex pt-28 px-14 gap-24 relative">
          <ProductImages product={product} />
          {/* Popracować nad fixed position */}

          <ProductVariants product={product} />
        </div>
        <div className="w-1/2">
          <ProductInformation
            product={product}
            visiblePage={visiblePage}
            setVisiblePage={setVisiblePage}
          />
        </div>
        <div>
          <ProductRelated product={product} />
        </div>
        <div>
          <ProductOpinions product={product} />
        </div>
      </div>
    );
  } else {
    return <div>No data</div>;
  }
}
