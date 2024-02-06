// import redHeartFillIcon from "../assets/redHeart-fill.svg";
import redHeartEmptyIcon from "../assets/redHeart-empty.svg";
import Promotion from "./Boxes/Promotion";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
export default function ProductRelated() {
  const { product } = useContext(AppContext);
  if (product && product.length > 0) {
    return (
      <div className="xl:w-full xl:pb-20">
        <h2 className="xl:pl-14 font-bold xl:text-[20px] xl:pb-11 pb-5 pl-4">
          Podobne produkty
        </h2>
        <div className="flex flex-row flex-wrap xl:gap-14 gap-4 w-full justify-start">
          {product[0].related.map((item) => {
            return (
              <div
                key={item.image}
                className="relative cursor-pointer flex xl:flex-col gap-4 xl:gap-0 ml-4 w-[350px] md:w-[400px] lg:w-[500px] xl:w-auto"
              >
                <div className="flex flex-col justify-center">
                  {item.promotion && (
                    <div className="absolute xl:top-2 xl:left-2 top-3 left-1">
                      <Promotion text="Promocja" visible={item.promotion} />
                    </div>
                  )}
                  <img
                    src={item.image}
                    className="xl:w-[243px] xl:h-[234px] min-h-[120px] h-[120px] min-w-[120px] rounded-md xl:rounded-none"
                  />
                </div>
                <div className="">
                  <div className="flex flex-wrap items-center xl:justify-between gap-4 xl:gap-0 pt-6 pb-1">
                    <h4>{item.tittle}</h4>
                    <img
                      src={redHeartEmptyIcon}
                      className="xl:w-[16px] xl:h-[16px]"
                    />
                  </div>
                  <span className="break-all">{item.color}</span>
                  <div className="pt-1 flex gap-3 items-end">
                    <span>{item.price}</span>
                    <span className="xl:text-[13px] line-through">
                      {item.lastprice}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
