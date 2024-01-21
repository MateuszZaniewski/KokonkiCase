import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Delivery({ visiblePage, setVisiblePage }) {
  return (
    <div
      onClick={() => setVisiblePage(3)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between">
        <span className="uppercase xl:text-[13px] font-bold">
          Dostawa i zwroty
        </span>
        <img src={visiblePage === 3 ? arrowUpIcon : arrowDownIcon} />
      </div>
    </div>
  );
}
