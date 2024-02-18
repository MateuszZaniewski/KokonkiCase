import cartIcon from "../assets/bag.svg";
import heartFillIcon from "../assets/heart-fill.svg";
import searchIcon from "../assets/search.svg";
import userIcon from "../assets/user.svg";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.png";
import rightArrowIcon from "../assets/rightArrow.png";
import closeIcon from "../assets/closeIcon.png";
import QuickCart from "./QuickCart";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useCartStore } from "../store/store";
export default function Navbar() {
  const {
    visibleQuickCart,
    setVisibleQuickCart,
    visibleHamburgerMenu,
    setVisibleHamburgerMenu,
  } = useContext(AppContext);
  const cart = useCartStore((state) => state.cart);
  const root = document.querySelector("#root");

  useEffect(() => {
    if (visibleHamburgerMenu) {
      disableBodyScroll(root);
    } else {
      enableBodyScroll(root);
    }

    return () => {
      // Release any locks when the component unmounts
      clearAllBodyScrollLocks();
    };
  }, [visibleHamburgerMenu, root]);

  const hideMenu = () => {
    setVisibleHamburgerMenu(false);
  };
  const categoryLinks = ["Nowości", "Włóczki", "Akcesoria", "Promocje", "Blog"];
  const interLinks = ["Moje konto", "Ulubione", "Koszyk"];

  return (
    <nav>
      <div className="flex items-center justify-between pt-2 ">
        {/* HamburgerMenu section */}
        <div
          onClick={() => hideMenu()}
          className={`${
            visibleHamburgerMenu
              ? "fixed right-0 top-0 z-10 h-[100vh] w-[100vw] bg-transparent brightness-50 backdrop-blur-[2px]"
              : "hidden"
          }`}
        ></div>
        <div
          className={`${
            visibleHamburgerMenu
              ? "absolute right-0 top-0 z-10 h-[100vmax] w-1/2 min-w-[300px] overflow-y-auto bg-[#F9F8F9]"
              : "hidden"
          }`}
        >
          <div className="flex w-full flex-col pt-5">
            <div className="flex w-full justify-end px-2">
              <img
                onClick={() => hideMenu()}
                className="h-8 w-8"
                src={closeIcon}
              />
            </div>
            <div className=" py-4 pl-2">
              <div className="flex items-center border-b pb-1 pl-2">
                <img src={searchIcon} className=" h-5 w-5" />
                <input
                  type="search"
                  placeholder="Szukaj"
                  className=" w-full bg-[#F9F8F9] indent-2 outline-none"
                ></input>
              </div>
            </div>
            <ul className="flex flex-col gap-5 border-b border-black py-5">
              {categoryLinks.map((e) => {
                return (
                  <div
                    key={e}
                    className="flex justify-between border-b pb-1 pl-5 pr-2"
                  >
                    <Link className="hover:text-[#F6C48F]">{e}</Link>
                    <img src={rightArrowIcon} className="h-5 w-5" />
                  </div>
                );
              })}
            </ul>
            <ul className="flex flex-col gap-5 py-5">
              {interLinks.map((e) => {
                return (
                  <div
                    key={e}
                    className="flex justify-between border-b pb-1 pl-5 pr-2"
                  >
                    <Link to="/checkout" className="hover:text-[#F6C48F]">
                      {e}
                    </Link>
                    <img src={rightArrowIcon} className="h-5 w-5" />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Search section */}
        <div className="md:pl-5 xl:w-[25%] xl:min-w-52 xl:pl-14  ">
          <div className="hidden items-center border-b border-b-black pb-1 md:flex">
            <img src={searchIcon} className=" h-5 w-5" />
            <input
              placeholder="Szukaj"
              className="bg-[#F9F8F9] indent-2 outline-none placeholder:text-black"
            ></input>
          </div>
        </div>
        {/* Logo section */}
        <div className="flex w-full justify-center">
          <Link to="/">
            <img src={logo} className="w-48 lg:h-auto lg:w-[20rem]" />
          </Link>
        </div>
        <div className="hidden md:flex">
          {/* User, Fav, Cart section */}
          <div className="flex w-auto gap-9 pr-10 xl:pr-14">
            <div className="md:w-[40px]">
              <img
                src={userIcon}
                className="h-[24px] w-[24px] cursor-pointer hover:scale-110"
              />
            </div>
            <div className="md:w-[40px]">
              <img
                src={heartFillIcon}
                className="h-[24px] w-[24px] cursor-pointer hover:scale-110"
              />
            </div>
            <div className="flex items-center gap-1">
              <img
                src={cartIcon}
                className=" h-6 w-6 cursor-pointer hover:scale-110"
                onClick={() => setVisibleQuickCart(true)}
              />
              ({cart && cart.length})
            </div>
          </div>
        </div>
        <div
          onClick={() => setVisibleHamburgerMenu(!visibleHamburgerMenu)}
          className="pr-4 md:hidden"
        >
          <img src={hamburger} className="h-10 w-10" />
        </div>
        {/* QuickCart section */}
        <div className={`${visibleQuickCart ? "block" : "hidden"}`}>
          <QuickCart />
        </div>
      </div>
    </nav>
  );
}
