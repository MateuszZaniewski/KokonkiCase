import { useCartStore } from "../../store/store";
import QuickCartCount from "../Boxes/QuickCartCount";
import alertIcon from "../../assets/alert.svg";
import CtaButton from "../Boxes/CtaButton";
import truckIcon from "../../assets/truck.svg";

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
    <div className="xl:px-16 lg:px-10 px-5 lg:pt-10 xl:max-w-[1320px] xl:mx-auto xl:pb-32">
      <div className="flex items-center lg:gap-[60px] gap-5 pt-5 lg:pt-0">
        <span className=" font-semibold text-[20px]">Koszyk</span>
        <span>
          {cart.length === 1
            ? `${cart.length} produkt`
            : `${cart.length} produktów`}
        </span>
      </div>
      <div className="lg:pt-10 py-5 text-center lg:text-left">
        <span>
          {200 - totalCost() > 0
            ? `Do darmowej dostawy brakuje Ci ${
                200 - cart[0].price * cart[0].quantity
              } zł`
            : "Brawo, masz darmową dostawę!"}{" "}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="xl:w-[670px] lg:w-[500px]">
          {cart.map((cartItem) => {
            return (
              <li
                key={cartItem.name}
                className="flex lg:py-10 lg:w-[90%] lg:gap-5"
              >
                <div className="xl:w-[170px] xl:h-[170px] xl:min-w-[170px]">
                  <img src={cartItem.image} className="w-full h-full" />
                </div>
                <div className="flex flex-col w-full pl-2 lg:pl-0">
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
                  <div className="lg:hidden flex justify-end pt-8">
                    <span
                      className="underline font-semibold text-[14px]"
                      onClick={() => deleteItemFromCart(cartItem.name)}
                    >
                      USUŃ
                    </span>
                  </div>
                </div>
                <div className="hidden lg:flex items-start">
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
        <div className="xl:w-[445px] lg:w-[390px] xl:text-[16px]">
          <div className="flex justify-between pb-3">
            <span>Cena produktów</span>
            <span>{totalCost()} zł</span>
          </div>
          <div className="flex justify-between pb-3">
            <span>Dostawa</span>
            <span>od 0 zł</span>
          </div>
          <div className="flex justify-between xl:text-[20px] font-semibold">
            <span>Łączna kwota</span>
            <span>{totalCost()} zł</span>
          </div>
          <span>z VAT</span>
          <div className="w-[80%] mx-auto pt-9 pb-14">
            <CtaButton
              text="Przejdz do kasy"
              background="bg-[#2A4746]"
              color="text-white"
            />
          </div>
          <div className="flex items-center pl-2 xl:w-[234px] mx-auto pb-14">
            <input
              type="text"
              placeholder="Wpisz kod"
              className=" bg-[#F9F8F9] indent-2 border-b border-black outline-none w-full placeholder:text-black"
            ></input>
            <button className="border-2 rounded-xl border-[#2A4746] xl:w-[85px] h-auto">
              Dodaj
            </button>
          </div>
          <div className="flex gap-3 pb-3">
            <img src={alertIcon} />
            <span>
              Odbiór osobisty w punkcie odbioru w Białystoku zawsze za darmo.
            </span>
          </div>
          <div className="flex gap-3">
            <img src={truckIcon} />
            <span>Darmowa dostawa dla zamówień powyżej 200 zł.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
