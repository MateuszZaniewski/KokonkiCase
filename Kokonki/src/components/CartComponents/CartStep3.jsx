import step3 from "../../assets/step3.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useState } from "react";
export default function CartStep3({ thirdForm, setThirdForm }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const SingleMethod = ({ name }) => {
    const handleChange = () => {
      setThirdForm({ payForm: name });
      setSelected(name);
    };

    return (
      <div className="flex items-center gap-1">
        <input
          name="pay-radio-button"
          type="radio"
          className="h-[15px] w-[15px]"
          onChange={handleChange}
          checked={selected === name}
        ></input>
        <label>{name}</label>
      </div>
    );
  };
  return (
    <div className="border-b-2 border-black bg-[#F9F8F9] py-5 lg:mr-28">
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
      <div className={open ? "block pt-5 md:pl-8" : "hidden"}>
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
