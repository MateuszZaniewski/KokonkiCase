import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Patterns({ visiblePage, setVisiblePage }) {
  return (
    <div
      onClick={() => setVisiblePage(4)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between">
        <span className="uppercase xl:text-[13px] font-bold">
          Wzory dla włóczki
        </span>
        <img src={visiblePage === 4 ? arrowUpIcon : arrowDownIcon} />
      </div>
    </div>
  );
}
