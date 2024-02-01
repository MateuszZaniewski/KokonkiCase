import closeIcon from "../assets/close.svg";
import Count from "./Boxes/Count";
export default function QuickCart({ product, cart, setCart }) {
  if (product && cart.length > 0) {
    console.log(product, cart);
    return (
      <div className="xl:w-[492px] xl:h-[810px] border border-black bg-[#F9F8F9] flex xl:flex-col">
        <div className="flex justify-between xl:px-5 xl:py-6 border-b-2 border-black">
          <span>KOSZYK</span>
          <img src={closeIcon} className="h-[10px] w-[10px]" />
        </div>
        <div className="flex justify-center xl:py-3 border-b-2 border-black">
          <span>Do darmowej dostawy brakuje Ci 183,50 zł</span>
        </div>
        <div>
          <ul>
            {product.map((item) => {
              return (
                <li
                  key={item.name}
                  className="flex xl:py-10 xl:w-[90%] xl:mx-auto xl:gap-5 border-b-2 border-black"
                >
                  <div className="xl:w-[170px] xl:h-[170px] xl:min-w-[170px]">
                    <img src={item.images[0]} className="w-full h-full" />
                  </div>
                  <div className="flex flex-col w-full">
                    <span>{item.name}</span>
                    <span>średni brąz (mix 0612)</span>
                    <span>{item.pricenow}</span>
                    <div className="flex items-center justify-between">
                      <Count />
                      <span>USUŃ</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>Summary</div>
      </div>
    );
  }

  return <span>No items</span>;
}
