import { useCartStore } from "../../store/store";
import Products from "./Products";
import Summary from "./Summary";
import SummaryWithOrder from "./SummaryWithOrder";
import CartStep from "./CartStep";
import backIcon from "../../assets/back.svg";
import { useState } from "react";

export default function Cart() {
  const [firstForm, setFirstForm] = useState({
    name: "",
    street: "",
    house: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    suggestions: "",
    same: false,
  });
  const [secondForm, setSecondForm] = useState({
    courier: "",
    price: "",
  });
  const [thirdForm, setThirdForm] = useState({
    payForm: "",
  });
  const cart = useCartStore((state) => state.cart);
  const step = useCartStore((state) => state.step);
  const prevStep = useCartStore((state) => state.prevStep);
  const resetStep = useCartStore((state) => state.resetStep);

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
          <div className="mx-auto flex flex-col gap-10 pt-10 sm:w-[500px] md:w-[550px] lg:w-full lg:max-w-[1320px] lg:flex-row lg:justify-between lg:gap-0">
            <div className="w-full">
              {step === 0 ? (
                <Products />
              ) : (
                <CartStep
                  firstForm={firstForm}
                  setFirstForm={setFirstForm}
                  secondForm={secondForm}
                  setSecondForm={setSecondForm}
                  thirdForm={thirdForm}
                  setThirdForm={setThirdForm}
                />
              )}
            </div>
            <div>
              {step === 0 ? (
                <Summary />
              ) : (
                <SummaryWithOrder
                  firstForm={firstForm}
                  secondForm={secondForm}
                  thirdForm={thirdForm}
                />
              )}
            </div>
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
