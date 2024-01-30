import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Info({ visiblePage, setVisiblePage, product }) {
  return (
    <div
      onClick={() => setVisiblePage(1)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between cursor-pointer">
        <span className="uppercase xl:text-[13px] font-bold">
          Opis produktu
        </span>
        <img src={visiblePage === 1 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 1 ? "block" : "hidden"} pt-3 pl-5`}>
        <p className=" whitespace-pre-wrap">{product[0].description}</p>
      </div>
    </div>
  );
}
