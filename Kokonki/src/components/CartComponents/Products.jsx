import { useCartStore } from "../../store/store";
import QuickCartCount from "../Boxes/QuickCartCount";
import alertIcon from "../../assets/alert.svg";

export default function Products() {
  const cart = useCartStore((state) => state.cart);
  const deleteItemFromCart = useCartStore((state) => state.deleteItem);
  const totalCost = () => {
    if (cart && cart.length > 0) {
      const totalCost = cart.reduce((acc, currentItem) => {
        return acc + currentItem.quantity * currentItem.price;
      }, 0);
      return totalCost;
    } else {
      return 0;
    }
  };

  if (cart && cart.length > 0) {
    return (
      <div>
        <div className="flex items-center gap-5 pt-5 lg:gap-[60px] lg:pt-0">
          <span className=" text-[20px] font-semibold">Koszyk</span>
          <span>
            {cart.length === 1
              ? `${cart.length} produkt`
              : `${cart.length} produktów`}
          </span>
        </div>
        <div className="py-10 lg:py-5 lg:pt-10  lg:text-left">
          {200 - totalCost() > 0 ? (
            `Do darmowej dostawy brakuje Ci ${(200 - totalCost())
              .toFixed(2)
              .split(".")
              .join(",")} zł`
          ) : (
            <span className="text-green-600">Brawo, masz darmową dostawę!</span>
          )}
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[500px] xl:w-[670px]">
            {cart.map((cartItem) => {
              return (
                <li
                  key={cartItem.name}
                  className="flex flex-col lg:w-[90%] lg:flex-row lg:gap-5 lg:py-10"
                >
                  <div className="mx-auto max-h-[300px] max-w-[300px] lg:h-[170px] lg:min-w-[170px] xl:w-[170px]">
                    <img src={cartItem.image} className="h-full w-full" />
                  </div>
                  <div className="flex w-full flex-col pl-2 lg:pl-0">
                    <span className="pt-3 font-semibold lg:pt-0 xl:pb-1 xl:text-[20px]">
                      {cartItem.name}
                    </span>
                    <span className="pb-4">średni brąz (mix 0612)</span>
                    <span className="xl:pb-5 xl:text-[16px]">
                      {(cartItem.price * cartItem.quantity)
                        .toFixed(2)
                        .split(".")
                        .join(",") + " zł"}
                    </span>
                    <div className="pt-4 lg:pt-0">
                      <QuickCartCount
                        count={cartItem.quantity}
                        name={cartItem.name}
                      />
                    </div>
                    <div className="flex justify-end pt-8 lg:hidden">
                      <span
                        className="text-[14px] font-semibold underline"
                        onClick={() => deleteItemFromCart(cartItem.name)}
                      >
                        USUŃ
                      </span>
                    </div>
                  </div>
                  <div className="hidden items-start lg:flex">
                    <span
                      className="text-[14px] font-semibold underline"
                      onClick={() => deleteItemFromCart(cartItem.name)}
                    >
                      USUŃ
                    </span>
                  </div>
                </li>
              );
            })}
            <div className="flex gap-3 pt-5 lg:pt-0">
              <img src={alertIcon} />
              <span>
                Pamiętaj, koszyk to nie rezerwacja. Produkty, mogą zostać
                wyprzedane.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
