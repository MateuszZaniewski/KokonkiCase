import { useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useCartStore } from "../store/store";
export default function QuickCart() {
  const { product, setCart, visibleQuickCart, setVisibleQuickCart } =
    useContext(AppContext);
  const cart = useCartStore((state) => state.cart);
  const deleteItemFromCart = useCartStore((state) => state.deleteItem);
  const root = document.querySelector("#root");

  useEffect(() => {
    if (visibleQuickCart) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [visibleQuickCart, root]);

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

  const handleCountChange = (productId, newCount) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const productIndex = updatedCart.findIndex(
        (item) => item.product.id === productId,
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
        <div className="py-14 text-center font-semibold xl:py-24 xl:text-[14px]">
          <span>TWÓJ KOSZYK JEST PUSTY</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
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
    if (product && product.length) {
      return (
        <>
          <div>
            <ul className="no-scrollbar overflow-scroll xl:min-h-[470px]">
              {cart.map((cartItem) => {
                return (
                  <li
                    key={cartItem.name}
                    className="flex border-b-2 border-black xl:mx-auto xl:w-[90%] xl:gap-5 xl:py-10"
                  >
                    <div className="xl:h-[170px] xl:w-[170px] xl:min-w-[170px]">
                      <img src={cartItem.image} className="h-full w-full" />
                    </div>
                    <div className="flex w-full flex-col">
                      <span className="font-semibold xl:pb-1 xl:text-[20px]">
                        {cartItem.name}
                      </span>
                      <span className="xl:pb-5 xl:text-[16px]">
                        {(cartItem.price * cartItem.quantity)
                          .toString()
                          .split(".")
                          .join(",") + " zł"}
                      </span>
                      <div className="flex items-center justify-between">
                        <QuickCartCount
                          count={cartItem.quantity}
                          onCountChange={(newCount) =>
                            handleCountChange(product.id, newCount)
                          }
                        />
                        <span onClick={() => deleteItemFromCart(cartItem.name)}>
                          USUŃ
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-t-2 border-black pt-5">
            <div className="mx-auto flex w-[70%] justify-between pb-2">
              <span>DOSTAWA</span>
              <span>od 0,00 zł</span>
            </div>
            <div className="mx-auto flex w-[70%] justify-between pb-10 font-bold">
              <span>ŁĄCZNA KWOTA</span>
              {totalCost() + " zł"}
            </div>
            <div className="mx-auto flex w-[70%] justify-center">
              <Link to="/checkout">
                <CtaButton
                  text="Zobacz koszyk"
                  background="bg-[#2A4746]"
                  color="text-[#F9F8F9]"
                />
              </Link>
            </div>
          </div>
        </>
      );
    }
  };

  if (cart && cart.length > 0) {
    return (
      <div className="">
        <div
          onClick={() => setVisibleQuickCart(false)}
          className="absolute right-0 top-0 z-10 h-[100vh] w-[100vw] bg-transparent brightness-50 backdrop-blur-[2px]"
        ></div>
        <div className="relative max-w-[1440px]">
          <div className=" absolute right-0 top-0 z-10 flex h-[810px] w-[492px] flex-col rounded-xl bg-[#F9F8F9]">
            <div className="flex justify-between border-b-2 border-black px-5 py-6">
              <span>KOSZYK</span>
              <img
                src={closeIcon}
                className="h-[10px] w-[10px]"
                onClick={() => setVisibleQuickCart(false)}
              />
            </div>
            <div className="flex justify-center border-b-2 border-black py-3">
              <span>
                {" "}
                {200 - totalCost() > 0
                  ? `Do darmowej dostawy brakuje Ci ${
                      200 - cart[0].price * cart[0].quantity
                    } zł`
                  : "Brawo, masz darmową dostawę!"}{" "}
              </span>
            </div>
            {cart.length > 0 ? <PopulatedCart /> : <EmptyCart />}
          </div>
        </div>
      </div>
    );
  }
}
