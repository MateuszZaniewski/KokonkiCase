import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Patterns({ visiblePage, setVisiblePage, product }) {
  return (
    <div onClick={() => setVisiblePage(4)} className="py-4 xl:w-[538px]">
      <div className="flex cursor-pointer justify-between">
        <span className="font-bold uppercase xl:text-[13px]">
          Wzory dla włóczki
        </span>
        <img src={visiblePage === 4 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 4 ? "block" : "hidden"} pt-3`}>
        <div className="wrap flex gap-5">
          {product[0].patterns.map((pattern) => {
            return (
              <div key={pattern.tittle} className="w-1/3">
                <img src={pattern.image} />
                <h3 className="pb-1 pt-3 font-bold xl:text-[16px]">
                  {pattern.tittle}
                </h3>
                <span>{pattern.cap}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
