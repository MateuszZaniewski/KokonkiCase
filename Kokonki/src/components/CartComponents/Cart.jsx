import { useCartStore } from "../../store/store";
import Products from "./Products";
import Summary from "./Summary";
import SummaryWithOrder from "./SummaryWithOrder";
import CartStep1 from "./CartStep1";
import backIcon from "../../assets/back.svg";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const step = useCartStore((state) => state.step);
  const prevStep = useCartStore((state) => state.prevStep);
  const resetStep = useCartStore((state) => state.resetStep);
  console.log(step);

  if (cart && cart.length > 0) {
    return (
      <>
        <div className="mx-auto flex gap-2 px-5 lg:px-10 lg:pt-10 xl:max-w-[1320px] xl:px-16">
          <img src={backIcon} />
          {step === 0 ? (
            <span onClick={() => resetStep()}>Wróć</span>
          ) : step === 1 ? (
            <span onClick={() => prevStep(0)}>Koszyk</span>
          ) : (
            ""
          )}
        </div>
        <div className="mx-auto px-5 lg:px-10 lg:pt-10 xl:max-w-[1320px] xl:px-16 xl:pb-32">
          <div className="mx-auto flex flex-col gap-10 pt-10 md:w-[450px] lg:w-full lg:max-w-[1320px] lg:flex-row lg:justify-between lg:gap-0">
            <div>{step === 0 ? <Products /> : <CartStep1 />}</div>
            <div>{step === 0 ? <Summary /> : <SummaryWithOrder />}</div>
          </div>
        </div>
      </>
    );
  }

  if (cart && cart.length === 0) {
    return (
      <div className="px-5 py-32 text-center text-[22px] font-semibold text-gray-700 lg:px-10 lg:pt-10 xl:mx-auto xl:max-w-[1320px] xl:px-16 xl:py-32">
        <span>Twój koszyk jest pusty</span>
      </div>
    );
  }
}
