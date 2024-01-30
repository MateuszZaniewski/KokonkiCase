import cartIcon from "../assets/bag.svg";
import heartFillIcon from "../assets/heart-fill.svg";
import searchIcon from "../assets/search.svg";
import userIcon from "../assets/user.svg";
import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center pt-2 ">
        <div className="xl:pl-14 xl:min-w-52 w-[25%]  ">
          <div className="flex items-center border-b border-b-black pb-1">
            <img src={searchIcon} className=" h-5 w-5" />
            <input
              placeholder="Szukaj"
              className="placeholder:text-black bg-[#F9F8F9] indent-2 outline-none"
            ></input>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img src={logo} className="xl:w-[20rem] xl:h-auto" />
        </div>
        <div className="flex gap-9 xl:pr-14 w-[25%]">
          <div>
            <img
              src={userIcon}
              className=" h-6 w-6 cursor-pointer hover:scale-110"
            />
          </div>
          <div>
            <img
              src={heartFillIcon}
              className=" h-6 w-6 cursor-pointer hover:scale-110"
            />
          </div>
          <div className="flex items-center gap-1">
            <img
              src={cartIcon}
              className=" h-6 w-6 cursor-pointer hover:scale-110"
            />
            (0)
          </div>
        </div>
      </div>
    </nav>
  );
}
