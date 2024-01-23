// import redHeartFillIcon from "../assets/redHeart-fill.svg";
import redHeartEmptyIcon from "../assets/redHeart-empty.svg";
import Promotion from "./Boxes/Promotion";
export default function ProductRelated({ product }) {
  if (product && product.length > 0) {
    return (
      <div className="w-full xl:pb-20">
        <h2 className="xl:pl-14 font-bold xl:text-[20px] xl:pb-11">
          Podobne produkty
        </h2>
        <div className="flex xl:gap-14 justify-center">
          {product[0].related.map((item) => {
            return (
              <div key={item.image} className=" relative">
                {item.promotion && (
                  <div className="absolute top-2 left-2">
                    <Promotion text="Promocja" visible={item.promotion} />
                  </div>
                )}
                <img src={item.image} className="xl:w-[243px] xl:h-[234px]" />
                <div className="flex items-center justify-between pt-6 pb-1">
                  <h4>{item.tittle}</h4>
                  <img
                    src={redHeartEmptyIcon}
                    className="xl:w-[16px] xl:h-[16px]"
                  />
                </div>
                <span>{item.color}</span>
                <div className="pt-1 flex gap-3 items-end">
                  <span>{item.price}</span>
                  <span className="xl:text-[13px] line-through">
                    {item.lastprice}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
