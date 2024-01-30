import Promotion from "./Boxes/Promotion";
import Star from "./Boxes/Star";
import shareIcon from "../assets/share.svg";
import truckIcon from "../assets/truck.svg";
import redHeartFillIcon from "../assets/redHeart-fill.svg";
import redHeartEmptyIcon from "../assets/redHeart-empty.svg";
import Prices from "./Boxes/Prices";
import ProductColors from "./ProductColors";
import Count from "./Boxes/Count";
import CtaButton from "./Boxes/CtaButton";
import { useState } from "react";

export default function ProductVariants({ product }) {
  const [favourite, setFavourite] = useState(false);
  if (product && product.length > 0) {
    return (
      <div className="w-full">
        <Promotion text="Promocja" visible={true} />
        <div className="pt-2">{product[0].category}</div>
        <div className="flex justify-between">
          <div className="xl:text-[39px]">{product[0].name}</div>
          <div className="flex xl:gap-4">
            <img src={shareIcon} className="cursor-pointer hover:scale-110" />
            <img
              src={favourite ? redHeartFillIcon : redHeartEmptyIcon}
              onClick={() => setFavourite(!favourite)}
              className="cursor-pointer hover:scale-110"
            />
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
        <CtaButton
          text="Dodaj do koszyka"
          background="bg-[#2A4746]"
          color="text-[#FFFFFF]"
        />
        <div className="flex gap-1 py-7">
          <img src={truckIcon} />
          <span>Darmowa dostawa od 200 zł</span>
        </div>
      </div>
    );
  }
}
