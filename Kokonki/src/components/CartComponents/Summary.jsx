import { useCartStore } from "../../store/store";
import alertIcon from "../../assets/alert.svg";
import CtaButton from "../Boxes/CtaButton";
import truckIcon from "../../assets/truck.svg";

export default function Summary() {
  const cart = useCartStore((state) => state.cart);
  const nextStep = useCartStore((state) => state.nextStep);
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

  const goToNextStep = (next) => {
    console.log("Going to Step 1...");
    nextStep(next);
  };

  if (cart && cart.length > 0) {
    return (
      <div className="lg:w-[390px] xl:w-[445px] xl:text-[16px]">
        <div className="flex justify-between pb-3">
          <span>Cena produktów</span>
          <span>{totalCost().toFixed(2).split(".").join(",")} zł</span>
        </div>
        <div className="flex justify-between pb-3">
          <span>Dostawa</span>
          <span>od 0 zł</span>
        </div>
        <div className="flex justify-between font-semibold xl:text-[20px]">
          <span>Łączna kwota</span>
          <span>{totalCost().toFixed(2).split(".").join(",")} zł</span>
        </div>
        <span>z VAT</span>
        <div
          onClick={() => goToNextStep(1)}
          className="mx-auto pb-14 pt-9 lg:w-[80%]"
        >
          <CtaButton
            text="Przejdz do kasy"
            background="bg-[#2A4746]"
            color="text-white"
          />
        </div>
        <div className="flex w-[234px] items-center gap-2 pb-14 pl-2 lg:mx-auto">
          <input
            type="text"
            placeholder="Wpisz kod"
            className=" w-full border-b border-black bg-[#F9F8F9] indent-2 outline-none placeholder:text-black"
          ></input>
          <button className="h-auto rounded-xl border-2 border-[#2A4746] px-2 py-1 xl:w-[85px]">
            Dodaj
          </button>
        </div>
        <div className="flex gap-3 pb-3">
          <img src={alertIcon} />
          <span>
            Odbiór osobisty w punkcie odbioru w Białystoku zawsze za darmo.
          </span>
        </div>
        <div className="flex gap-3 pb-20 lg:pb-0">
          <img src={truckIcon} />
          <span>Darmowa dostawa dla zamówień powyżej 200 zł.</span>
        </div>
      </div>
    );
  }
}
