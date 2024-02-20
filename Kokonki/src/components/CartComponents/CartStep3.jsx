import step3 from "../../assets/step3.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useState } from "react";
export default function CartStep3({ thirdForm, setThirdForm }) {
  const [open, setOpen] = useState(true);

  const SingleMethod = ({ name }) => {
    return (
      <div className="flex items-center gap-1">
        <input type="radio" className="h-[15px] w-[15px]"></input>
        <label>{name}</label>
      </div>
    );
  };
  return (
    <div className="border-black bg-[#F9F8F9] lg:mr-28 lg:border-b-2 lg:py-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-1">
          <img src={step3} />
          <span className="text-[20px] font-semibold">Forma płatności</span>
        </div>
        <div>
          <img src={open ? arrowUpIcon : arrowDownIcon} />
        </div>
      </div>
      <div className={open ? "block lg:pl-8 lg:pt-5" : "hidden"}>
        <form className="flex flex-col gap-5 text-[16px] placeholder:text-[#554A4A] ">
          <SingleMethod name="BLIK / szybki przelew / płatność kartą / PayPO" />
          <SingleMethod name="Przelew" />
          <SingleMethod name="Płatność przy odbiorze" />
          <SingleMethod name="PayPal (+4,3%)" />
        </form>
      </div>
    </div>
  );
}
