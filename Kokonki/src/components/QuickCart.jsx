import { useEffect, useState } from "react";
import closeIcon from "../assets/close.svg";
import CtaButton from "../components/Boxes/CtaButton";
import QuickCartCount from "./Boxes/QuickCartCount";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
export default function QuickCart() {
  const { product, cart, setCart, visibleQuickCart, setVisibleQuickCart } =
    useContext(AppContext);
  const [totalCost, setTotalCost] = useState(0);
  const root = document.querySelector("#root");

  useEffect(() => {
    if (visibleQuickCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    return () => {
      // Release any locks when the component unmounts
      clearAllBodyScrollLocks();
    };
  }, [visibleQuickCart, root]);

  useEffect(() => {
    if (product && cart.length > 0) {
      const calculateCartCost = () => {
        const newTotalCost = cart.reduce(
          (acc, item) => acc + item.product.pricenow * item.count,
          0
        );
        setTotalCost(newTotalCost);
      };

      calculateCartCost();
    }
  }, [cart]);

  const handleCountChange = (productId, newCount) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product.id === productId
      );

      if (productIndex !== -1) {
        updatedCart[productIndex].count = newCount;
      }

      return updatedCart;
    });
  };

  const EmptyCart = () => {
    return (
      <>
        <div className="xl:py-24 font-semibold xl:text-[14px] py-14 text-center">
          <span>TWÓJ KOSZYK JEST PUSTY</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <CtaButton
            text="Przeglądaj włóczki"
            background="bg-[#2A4746]"
            color="text-white"
          />
          <CtaButton text="Sprawdź nowości" />
          <CtaButton text="Zobacz wzory" />
          <CtaButton text="Sprawdź promocje" />
        </div>
      </>
    );
  };

  const PopulatedCart = () => {
    return (
      <>
        <div>
          <ul className="xl:min-h-[470px] overflow-scroll no-scrollbar">
            {cart.map((cartItem) => {
              const { product, count } = cartItem;
              return (
                <li
                  key={product.id}
                  className="flex xl:py-10 xl:w-[90%] xl:mx-auto xl:gap-5 border-b-2 border-black"
                >
                  <div className="xl:w-[170px] xl:h-[170px] xl:min-w-[170px]">
                    <img src={product.images[0]} className="w-full h-full" />
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="font-semibold xl:text-[20px] xl:pb-1">
                      {product.name}
                    </span>
                    <span className="xl:text-[16px] xl:pb-5">
                      {(product.pricenow * count)
                        .toString()
                        .split(".")
                        .join(",") + " zł"}
                    </span>
                    <div className="flex items-center justify-between">
                      <QuickCartCount
                        count={count}
                        onCountChange={(newCount) =>
                          handleCountChange(product.id, newCount)
                        }
                      />
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
      </>
    );
  };

  return (
    <div className="">
      <div
        onClick={() => setVisibleQuickCart(false)}
        className="absolute z-10 top-0 right-0 w-[100vw] h-[100vh] bg-transparent backdrop-blur-[2px] brightness-50"
      ></div>
      <div className="max-w-[1440px] relative">
        <div className=" absolute top-0 right-0 z-10 w-[492px] h-[810px] rounded-xl bg-[#F9F8F9] flex flex-col">
          <div className="flex justify-between px-5 py-6 border-b-2 border-black">
            <span>KOSZYK</span>
            <img
              src={closeIcon}
              className="h-[10px] w-[10px]"
              onClick={() => setVisibleQuickCart(false)}
            />
          </div>
          <div className="flex justify-center py-3 border-b-2 border-black">
            <span>
              {" "}
              {200 - totalCost > 0
                ? `Do darmowej dostawy brakuje Ci ${200 - totalCost} zł`
                : "Brawo, masz darmową dostawę!"}{" "}
            </span>
          </div>
          {cart.length > 0 ? <PopulatedCart /> : <EmptyCart />}
        </div>
      </div>
    </div>
  );
}
