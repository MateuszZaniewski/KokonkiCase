import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Patterns({ visiblePage, setVisiblePage, product }) {
  return (
    <div onClick={() => setVisiblePage(4)} className="xl:w-[538px] py-4">
      <div className="flex justify-between cursor-pointer">
        <span className="uppercase xl:text-[13px] font-bold">
          Wzory dla włóczki
        </span>
        <img src={visiblePage === 4 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 4 ? "block" : "hidden"} pt-3`}>
        <div className="flex gap-5 wrap">
          {product[0].patterns.map((pattern) => {
            return (
              <div key={pattern.tittle} className="w-1/3">
                <img src={pattern.image} />
                <h3 className="font-bold xl:text-[16px] pt-3 pb-1">
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
