import { useCartStore } from "../../store/store";
import QuickCartCount from "../Boxes/QuickCartCount";
import alertIcon from "../../assets/alert.svg";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const deleteItemFromCart = useCartStore((state) => state.deleteItem);
  const totalCost = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  return (
    <div className="xl:px-16 xl:pt-10">
      <div className="flex items-center xl:gap-[60px] gap-5">
        <span className=" font-semibold text-[20px]">Koszyk</span>
        <span>
          {cart.length === 1
            ? `${cart.length} produkt`
            : `${cart.length} produktów`}
        </span>
      </div>
      <div className="xl:pt-10">
        <span>
          {200 - totalCost() > 0
            ? `Do darmowej dostawy brakuje Ci ${
                200 - cart[0].price * cart[0].quantity
              } zł`
            : "Brawo, masz darmową dostawę!"}{" "}
        </span>
      </div>

      <div>
        <div className="xl:max-w-[670px]">
          {cart.map((cartItem) => {
            return (
              <li
                key={cartItem.name}
                className="flex xl:py-10 xl:w-[90%] xl:gap-5"
              >
                <div className="xl:w-[170px] xl:h-[170px] xl:min-w-[170px]">
                  <img src={cartItem.image} className="w-full h-full" />
                </div>
                <div className="flex flex-col w-full">
                  <span className="font-semibold xl:text-[20px] xl:pb-1">
                    {cartItem.name}
                  </span>
                  <span className="pb-4">średni brąz (mix 0612)</span>
                  <span className="xl:text-[16px] xl:pb-5">
                    {(cartItem.price * cartItem.quantity)
                      .toString()
                      .split(".")
                      .join(",") + " zł"}
                  </span>
                  <QuickCartCount count={cartItem.quantity} />
                </div>
                <div className="flex items-start">
                  <span
                    className="underline font-semibold text-[14px]"
                    onClick={() => deleteItemFromCart(cartItem.name)}
                  >
                    USUŃ
                  </span>
                </div>
              </li>
            );
          })}
          <div className="flex gap-3">
            <img src={alertIcon} />
            <span>
              Pamiętaj, koszyk to nie rezerwacja. Produkty, mogą zostać
              wyprzedane.
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
