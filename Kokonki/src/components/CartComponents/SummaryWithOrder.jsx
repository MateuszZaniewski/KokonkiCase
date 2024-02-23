import { useCartStore } from "../../store/store";
import CtaButton from "../Boxes/CtaButton";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useState } from "react";
import { OrderMiniature } from "./OrderMiniature";
import {
  validateForm1,
  validateForm2,
  validateForm3,
} from "../../helpers/formValidation";
import SuccessPurchase from "./SuccessPurchase";

export default function SummaryWithOrder({
  firstForm,
  firstFormErrors,
  setFirstFormErrors,
  secondForm,
  secondFormErrors,
  setSecondFormErrors,
  thirdForm,
  thirdFormErrors,
  setThirdFormErrors,
}) {
  const cart = useCartStore((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

  const Error = ({ first, second, third }) => {
    if (Object.values(first).some((error) => error) || second || third) {
      return (
        <div className="pb-5 text-red-600">
          <span className="text-[20px]">
            Formularz posiada nieuzupełnione elementy. Proszę uzupełij dane.
          </span>
        </div>
      );
    }
  };

  const handlePurchase = () => {
    console.log("Purchasing in progress...");
    const response = validateForm1(firstForm);
    setFirstFormErrors(response);
    const secondResponse = validateForm2(secondForm);
    setSecondFormErrors(secondResponse);
    const thirdResponse = validateForm3(thirdForm);
    setThirdFormErrors(thirdResponse);

    if (
      Object.values(response).some((error) => error) ||
      Object.values(secondResponse).some((error) => error) ||
      Object.values(thirdResponse).some((error) => error)
    ) {
      setErrorMsg(true);
      setTimeout(() => {
        setErrorMsg(false);
      }, 5000);
    } else {
      setShowSuccess(true);
    }
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
        <div className="mx-auto pb-14 pt-9 xl:w-[80%]">
          <CtaButton
            text="Kupuję i płacę"
            background="bg-[#2A4746]"
            color="text-white"
            task={handlePurchase}
          />
        </div>
        {errorMsg && (
          <Error
            first={firstFormErrors}
            second={secondFormErrors}
            third={thirdFormErrors}
          />
        )}
        <div className="pb-20">
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-between border-b-2 border-black pb-5"
          >
            <span className="font-semibold lg:text-[20px]">
              Twoje zamówienie
            </span>
            <img src={open ? arrowUpIcon : arrowDownIcon} />
          </div>
          {open ? <OrderMiniature /> : null}
        </div>
        {showSuccess && (
          <div className="h-30 w-full border border-black">
            <SuccessPurchase
              showSuccess={showSuccess}
              setShowSuccess={setShowSuccess}
            />
          </div>
        )}
      </div>
    );
  }
}
