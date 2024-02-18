import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Delivery({ visiblePage, setVisiblePage }) {
  const PricedDelivery = ({ operator, time }) => {
    return (
      <div className="pb-3">
        <p className="pb-1">{operator}</p>
        <p className="text-[#554A4A]">{time}</p>
      </div>
    );
  };

  return (
    <div
      onClick={() => setVisiblePage(3)}
      className="border-b-2 border-black py-4 xl:w-[538px]"
    >
      <div className="flex cursor-pointer justify-between">
        <span className="font-bold uppercase xl:text-[13px]">
          Dostawa i zwroty
        </span>
        <img src={visiblePage === 3 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 3 ? "block" : "hidden"} pl-5 pt-3`}>
        <h2 className="pb-3 pt-5 font-bold">Formy dostawy</h2>
        <PricedDelivery
          operator="Poczta Polska odbiór w punkcie - 8,90 zł"
          time="2-5 dni roboczych"
        />
        <PricedDelivery
          operator="Poczta Polska - 9,90 zł"
          time="2-5 dni roboczych"
        />
        <PricedDelivery
          operator="InPost Paczkomaty 24/7 - 12,90 zł"
          time="1-2 dni roboczych"
        />
        <PricedDelivery
          operator="Kurier InPost - 13,90 zł"
          time="1-2 dni roboczych"
        />
        <PricedDelivery
          operator="Kurier DPD - 14,90 zł"
          time="1-2 dni roboczych"
        />

        <div className="pb-2">
          <p className="pb-1">Odbiór osobisty - 0,00 zł</p>
          <p className="text-[#554A4A]">Punkt odbioru: </p>
          <p className="text-[#554A4A]">KOKONKI</p>
          <p className="text-[#554A4A]">ul. Kolejowa 12E, I piętro</p>
          <p className="text-[#554A4A]">Białystok</p>
        </div>
      </div>

      <div className={`${visiblePage === 3 ? "block" : "hidden"} pl-5 pt-3`}>
        <h2 className="pb-3 pt-5 font-bold">Warunki zwrotów</h2>
        <p className=" pb-3">
          Możesz odstąpić od umowy zawartej na odległość bez podawania przyczyny
          w ciągu 14 dni. Odeślij do nas towar w ciągu kolejnych 14 dni, licząc
          od dnia odstąpienia od umowy.
        </p>
        <p className="pb-5">
          Zwrotowi nie podlegają produkty wyprodukowane według specyfikacji
          konsumenta.
        </p>
        <a className="border-b border-black pb-1">
          Szczegółowe informacje o zwrotach
        </a>
      </div>
    </div>
  );
}
