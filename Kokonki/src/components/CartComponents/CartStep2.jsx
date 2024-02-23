import step2 from "../../assets/step2.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useState } from "react";
export default function CartStep2({
  secondForm,
  setSecondForm,
  secondFormErrors,
  setSecondFormErrors,
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const SingleOption = ({ courier, price, subtittle }) => {
    const handleChange = () => {
      setSecondForm({ courier, price });
      setSelected(price);
    };

    return (
      <div className="lg:pr-16">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <input
              name="price-radio-button"
              type="radio"
              className="h-[15px] w-[15px]"
              onChange={handleChange}
              checked={selected === price}
            ></input>
            <label>{courier}</label>
          </div>
          <span className="font-semibold">{price} zł</span>
        </div>
        <div className="pl-4">
          <span className=" whitespace-pre-line text-[#554A4A]">
            {subtittle}
          </span>
        </div>
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
          <img src={step2} />
          <span className="text-[20px] font-semibold">Sposób dostawy</span>
        </div>
        <div>
          <img src={open ? arrowUpIcon : arrowDownIcon} />
        </div>
      </div>
      <div className={open ? "block pt-5 md:pl-8" : "hidden"}>
        <form className="flex flex-col gap-5 text-[16px] ">
          <SingleOption
            courier="Poczta Polska odbiór w punkcie"
            price="8,90"
            subtittle="2-5 dni roboczych"
          />
          <SingleOption
            courier="Poczta Polska"
            price="9,90"
            subtittle="2-5 dni roboczych"
          />
          <SingleOption
            courier="InPost Paczkomaty 24/7"
            price="12,90"
            subtittle="1-2 dni robocze"
          />
          <SingleOption
            courier="Kurier Inpost"
            price="13,90"
            subtittle="1-2 dni robocze"
          />
          <SingleOption
            courier="Kurier DPD"
            price="14,90"
            subtittle="1-2 dni robocze"
          />
          <SingleOption
            courier="Odbiór osobisty"
            price="0,00"
            subtittle="Punkt odbioru:
KOKONKI
ul. Kolejowa 12E, I piętro 
Białystok
Godziny pracy punktu odbioru osobistego:
poniedziałek - piątek 8.00-15.00"
          />
        </form>
      </div>
    </div>
  );
}
