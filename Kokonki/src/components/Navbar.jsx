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
export default function Navbar() {
  const {
    cart,
    visibleQuickCart,
    setVisibleQuickCart,
    visibleHamburgerMenu,
    setVisibleHamburgerMenu,
  } = useContext(AppContext);

  const root = document.querySelector("#root");
  console.log(root);

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
      <div className="flex justify-between items-center pt-2 ">
        {/* HamburgerMenu section */}
        <div
          onClick={() => hideMenu()}
          className={`${
            visibleHamburgerMenu
              ? "fixed z-10 top-0 right-0 w-[100vw] h-[100vh] bg-transparent backdrop-blur-[2px] brightness-50"
              : "hidden"
          }`}
        ></div>
        <div
          className={`${
            visibleHamburgerMenu
              ? "absolute right-0 top-0 z-10 bg-[#F9F8F9] h-[100vmax] w-1/2 min-w-[300px] overflow-y-auto"
              : "hidden"
          }`}
        >
          <div className="flex flex-col w-full pt-5">
            <div className="flex justify-end w-full px-2">
              <img
                onClick={() => hideMenu()}
                className="h-8 w-8"
                src={closeIcon}
              />
            </div>
            <div className=" pl-2 py-4">
              <div className="flex items-center border-b pb-1 pl-2">
                <img src={searchIcon} className=" h-5 w-5" />
                <input
                  type="search"
                  placeholder="Szukaj"
                  className=" bg-[#F9F8F9] indent-2 outline-none w-full"
                ></input>
              </div>
            </div>
            <ul className="flex flex-col py-5 gap-5 border-b border-black">
              {categoryLinks.map((e) => {
                return (
                  <div
                    key={e}
                    className="flex justify-between pl-5 pr-2 pb-1 border-b"
                  >
                    <Link className="hover:text-[#F6C48F]">{e}</Link>
                    <img src={rightArrowIcon} className="h-5 w-5" />
                  </div>
                );
              })}
            </ul>
            <ul className="flex flex-col py-5 gap-5">
              {interLinks.map((e) => {
                return (
                  <div
                    key={e}
                    className="flex justify-between pl-5 pr-2 pb-1 border-b"
                  >
                    <Link className="hover:text-[#F6C48F]">{e}</Link>
                    <img src={rightArrowIcon} className="h-5 w-5" />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Search section */}
        <div className="xl:pl-14 md:pl-5 xl:min-w-52 xl:w-[25%]  ">
          <div className="md:flex items-center border-b border-b-black pb-1 hidden">
            <img src={searchIcon} className=" h-5 w-5" />
            <input
              placeholder="Szukaj"
              className="placeholder:text-black bg-[#F9F8F9] indent-2 outline-none"
            ></input>
          </div>
        </div>
        {/* Logo section */}
        <div className="w-full flex justify-center">
          <img src={logo} className="lg:w-[20rem] w-48 lg:h-auto" />
        </div>
        <div className="hidden md:flex">
          {/* User, Fav, Cart section */}
          <div className="flex gap-9 xl:pr-14 pr-10 w-auto">
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
              ({cart.length})
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
