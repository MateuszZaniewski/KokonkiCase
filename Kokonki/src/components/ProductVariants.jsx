import Promotion from "./Boxes/Promotion";
import Star from "./Boxes/Star";
import shareIcon from "../assets/share.svg";
// import redHeartFillIcon from "../assets/redHeart-fill.svg";
import redHeartEmptyIcon from "../assets/redHeart-empty.svg";
import Prices from "./Boxes/Prices";
import ProductColors from "./ProductColors";
import Count from "./Boxes/Count";

export default function ProductVariants({ product }) {
  if (product && product.length > 0) {
    return (
      <div className="w-full">
        <Promotion text="Promocja" visible={true} />
        <div className="pt-2">{product[0].category}</div>
        <div className="flex justify-between">
          <div className="xl:text-[39px]">{product[0].name}</div>
          <div className="flex xl:gap-4">
            <img src={shareIcon} />
            <img src={redHeartEmptyIcon} />
          </div>
        </div>
        <Star rating={product[0].rating} />
        <Prices
          priceNow={product[0].pricenow}
          priceLast={product[0].pricelast}
          priceMonth={product[0].monthprice}
        />
        <ProductColors colors={product[0].colors} />
        <Count />
      </div>
    );
  }
}
