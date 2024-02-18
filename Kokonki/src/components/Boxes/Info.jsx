import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Info({ visiblePage, setVisiblePage, product }) {
  return (
    <div
      onClick={() => setVisiblePage(1)}
      className="border-b-2 border-black py-4 xl:w-[538px]"
    >
      <div className="flex cursor-pointer justify-between">
        <span className="font-bold uppercase xl:text-[13px]">
          Opis produktu
        </span>
        <img src={visiblePage === 1 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 1 ? "block" : "hidden"} pl-5 pt-3`}>
        <p className=" whitespace-pre-wrap">{product[0].description}</p>
      </div>
    </div>
  );
}
