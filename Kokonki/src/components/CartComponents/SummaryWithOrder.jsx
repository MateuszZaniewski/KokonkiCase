import { useCartStore } from "../../store/store";
import CtaButton from "../Boxes/CtaButton";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useState } from "react";
import { OrderMiniature } from "./OrderMiniature";

export default function SummaryWithOrder() {
  const cart = useCartStore((state) => state.cart);
  const [open, setOpen] = useState(false);
  const totalCost = () => {
    if (cart && cart.length > 0) {
      const totalCost = cart.reduce((acc, currentItem) => {
        return acc + currentItem.quantity * currentItem.price;
      }, 0);
      return totalCost;
    } else {
      return 0;
    }
  };

  if (cart && cart.length > 0) {
    return (
      <div className="lg:w-[390px] xl:w-[445px] xl:text-[16px]">
        <div className="flex justify-between pb-3">
          <span>Cena produktów</span>
          <span>{totalCost().toFixed(2).split(".").join(",")} zł</span>
        </div>
        <div className="flex justify-between pb-3">
          <span>Dostawa</span>
          <span>od 0 zł</span>
        </div>
        <div className="flex justify-between font-semibold xl:text-[20px]">
          <span>Łączna kwota</span>
          <span>{totalCost().toFixed(2).split(".").join(",")} zł</span>
        </div>
        <span>z VAT</span>
        <div className="mx-auto w-[80%] pb-14 pt-9">
          <CtaButton
            text="Kupuję i płacę"
            background="bg-[#2A4746]"
            color="text-white"
          />
        </div>
        <div>
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-between border-b-2 border-black pb-5"
          >
            <span className="font-semibold lg:text-[20px]">
              Twoje zamówienie
            </span>
            <img src={open ? arrowUpIcon : arrowDownIcon} />
          </div>
          {open ? <OrderMiniature /> : null}
        </div>
      </div>
    );
  }
}