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
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useCartStore } from "../store/store";

export default function ProductVariants() {
  const { product, quantity, cart, setCart, setShowAddedToCardModal } =
    useContext(AppContext);
  const [favourite, setFavourite] = useState(false);
  const addItemToCart = useCartStore((state) => state.addToCart);

  const addToCart = (product, quantity) => {
    addItemToCart(product.name, quantity);
    const existingProductIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].count += 1;
      setCart(updatedCart);
    } else {
      setShowAddedToCardModal(true);
      setCart([...cart, { product, count: 1 }]);
    }
  };

  if (product && product.length > 0) {
    return (
      <div className="w-full md:w-[450px] lg:w-[600px] xl:w-fit mx-auto xl:mx-0">
        <div className="hidden xl:block xl:w-[500px]">
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
          <div onClick={() => addToCart(product[0], quantity)}>
            <CtaButton
              text="Dodaj do koszyka"
              background="bg-[#2A4746]"
              color="text-[#FFFFFF]"
            />
          </div>
          <div className="flex gap-1 py-7">
            <img src={truckIcon} />
            <span>Darmowa dostawa od 200 zł</span>
          </div>
        </div>

        <div className="xl:hidden flex flex-col px-5">
          <Promotion text="Promocja" visible={true} />
          <div className="pt-4">{product[0].category}</div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="text-[28px]">{product[0].name}</div>
              <div className="flex gap-4">
                <img
                  src={shareIcon}
                  className="cursor-pointer hover:scale-110"
                />
                <img
                  src={favourite ? redHeartFillIcon : redHeartEmptyIcon}
                  onClick={() => setFavourite(!favourite)}
                  className="cursor-pointer hover:scale-110"
                />
              </div>
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
          <div className="" onClick={() => addToCart(product[0], quantity)}>
            <CtaButton
              text="Dodaj do koszyka"
              background="bg-[#2A4746]"
              color="text-[#FFFFFF]"
            />
          </div>
          <div className="flex gap-1 py-7">
            <img src={truckIcon} />
            <span>Darmowa dostawa od 200 zł</span>
          </div>
        </div>
      </div>
    );
  }
}
