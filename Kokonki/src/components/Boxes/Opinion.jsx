import Star from "./Star";
import checkIcon from "../../assets/check.svg";
import trustIcon from "../../assets/trustMate.png";
export default function Opinion({ value }) {
  return (
    <div className="flex xl:px-10 xl:py-14 border-b-2 border-black ">
      <div className="w-1/4">
        {value.image.length > 0 ? (
          <img className="xl:w-[160px] xl:h-[160px]" src={value.image} />
        ) : (
          <div className="xl:w-[160px] xl:h-[160px]"></div>
        )}
      </div>
      <div className="w-3/4 pl-7">
        <div className="flex justify-between">
          <Star rating={value.rate} />
          <div className={value.trust ? "block" : "hidden"}>
            <img className="xl:w-[144px] xl:h-[28px]" src={trustIcon} />
          </div>
        </div>
        <div className="py-2">
          <span>{value.name}</span>
        </div>
        <div className={value.veryfied ? "flex gap-1" : "hidden"}>
          <img src={value.veryfied ? checkIcon : ""} />
          <span>Veryfied Buyer</span>
        </div>
        <p className="pt-2">{value.text}</p>
      </div>
    </div>
  );
}
