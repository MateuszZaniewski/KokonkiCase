import { useEffect, useState } from "react";
import closeIcon from "../assets/close.svg";
import CtaButton from "../components/Boxes/CtaButton";
import QuickCartCount from "./Boxes/QuickCartCount";
export default function QuickCart({
  product,
  cart,
  setCart,
  visibleQuickCart,
  setVisibleQuickCart,
}) {
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    if (product && cart.length > 0) {
      const calculateCartCost = () => {
        const newTotalCost = product.reduce(
          (acc, item) => acc + item.pricenow,
          0
        );
        setTotalCost(newTotalCost);
      };

      calculateCartCost();
    }
  }, [product, cart]);
  if (product && cart.length > 0) {
    return (
      <div>
        <div
          onClick={() => setVisibleQuickCart(false)}
          className="absolute z-10 top-0 right-0 w-[100vw] h-[100vh]"
        ></div>
        <div>
          <div className=" absolute top-0 right-0 z-10 xl:w-[492px] xl:h-[810px] border border-black bg-[#F9F8F9] flex xl:flex-col">
            <div className="flex justify-between xl:px-5 xl:py-6 border-b-2 border-black">
              <span>KOSZYK</span>
              <img
                src={closeIcon}
                className="h-[10px] w-[10px]"
                onClick={() => setVisibleQuickCart(false)}
              />
            </div>
            <div className="flex justify-center xl:py-3 border-b-2 border-black">
              <span>Do darmowej dostawy brakuje Ci {200 - totalCost} zł</span>
            </div>
            <div>
              <ul className="xl:min-h-[470px] overflow-scroll no-scrollbar">
                {product.map((item) => {
                  let itemCount = 1;
                  return (
                    <li
                      key={item.name}
                      className="flex xl:py-10 xl:w-[90%] xl:mx-auto xl:gap-5 border-b-2 border-black"
                    >
                      <div className="xl:w-[170px] xl:h-[170px] xl:min-w-[170px]">
                        <img src={item.images[0]} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col w-full">
                        <span className="font-semibold xl:text-[20px] xl:pb-1">
                          {item.name}
                        </span>
                        <span className="xl:text-[16px] xl:pb-5">
                          średni brąz (mix 0612)
                        </span>
                        <span className="xl:text-[16px] xl:pb-5">
                          {(item.pricenow * itemCount)
                            .toString()
                            .split(".")
                            .join(",") + " zł"}
                        </span>
                        <div className="flex items-center justify-between">
                          <QuickCartCount />
                          <span>USUŃ</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-5 border-t-2 border-black">
              <div className="w-[70%] mx-auto flex justify-between pb-2">
                <span>DOSTAWA</span>
                <span>od 0,00 zł</span>
              </div>
              <div className="w-[70%] mx-auto font-bold flex justify-between pb-10">
                <span>ŁĄCZNA KWOTA</span>
                <span>{totalCost.toString().split(".").join(",")} zł</span>
              </div>
              <div className="flex justify-center w-[70%] mx-auto">
                <CtaButton
                  text="Zobacz koszyk"
                  background="bg-[#2A4746]"
                  color="text-[#F9F8F9]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <span>No items</span>;
}
