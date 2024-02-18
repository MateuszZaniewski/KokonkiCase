import Star from "./Star";
import checkIcon from "../../assets/check.svg";
import trustIcon from "../../assets/trustMate.png";
export default function Opinion({ value }) {
  return (
    <>
      <div className="hidden border-b-2 border-black xl:flex xl:px-10 xl:py-14 ">
        <div className="flex">
          <div className="w-1/4">
            {value.image.length > 0 ? (
              <img className="xl:h-[160px] xl:w-[160px]" src={value.image} />
            ) : (
              <div className="xl:h-[160px] xl:w-[160px]"></div>
            )}
          </div>
          <div className="w-3/4 pl-7">
            <div className="flex justify-between">
              <Star rating={value.rate} />
              <div className={value.trust ? "block" : "hidden"}>
                <img
                  className="h-5 w-10 xl:h-[28px] xl:w-[144px]"
                  src={trustIcon}
                />
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
      </div>

      <div className="mx-auto flex border-b-2 border-black px-4 py-8 md:w-[450px] lg:w-[600px] xl:hidden">
        <div className="flex flex-col flex-wrap xl:hidden">
          <div className="">
            {value.image.length > 0 ? (
              <img className="h-[150px] w-[150px]" src={value.image} />
            ) : (
              <div className="h-[160px] w-[160px]"></div>
            )}
          </div>
          <div className="">
            <div className="flex gap-4">
              <Star rating={value.rate} />
              <div className={value.trust ? "block" : "hidden"}>
                <img
                  className="h-10 w-28 xl:h-[28px] xl:w-[144px]"
                  src={trustIcon}
                />
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
      </div>
    </>
  );
}
