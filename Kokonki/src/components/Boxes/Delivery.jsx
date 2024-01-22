import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
export default function Delivery({ visiblePage, setVisiblePage }) {
  return (
    <div
      onClick={() => setVisiblePage(3)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between">
        <span className="uppercase xl:text-[13px] font-bold">
          Dostawa i zwroty
        </span>
        <img src={visiblePage === 3 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 3 ? "block" : "hidden"} pt-3 pl-5`}>
        <h2 className="font-bold pt-5 pb-3">Formy dostawy</h2>
        <div className="pb-2">
          <p className="pb-1">Poczta Polska odbiór w punkcie - 8,90 zł</p>
          <p className="text-[#554A4A]">2-5 dni roboczych</p>
        </div>
        <div className="pb-2">
          <p className="pb-1">Poczta Polska - 9,90 zł</p>
          <p className="text-[#554A4A]">2-5 dni roboczych</p>
        </div>
        <div className="pb-2">
          <p className="pb-1">InPost Paczkomaty 24/7 - 12,90 zł</p>
          <p className="text-[#554A4A]">1-2 dni roboczych</p>
        </div>
        <div className="pb-2">
          <p className="pb-1">Kurier InPost - 13,90 zł</p>
          <p className="text-[#554A4A]">1-2 dni roboczych</p>
        </div>
        <div className="pb-2">
          <p className="pb-1">Kurier DPD - 14,90 zł</p>
          <p className="text-[#554A4A]">1-2 dni roboczych</p>
        </div>
        <div className="pb-2">
          <p className="pb-1">Odbiór osobisty - 0,00 zł</p>
          <p className="text-[#554A4A]">Punkt odbioru: </p>
          <p className="text-[#554A4A]">KOKONKI</p>
          <p className="text-[#554A4A]">ul. Kolejowa 12E, I piętro</p>
          <p className="text-[#554A4A]">Białystok</p>
        </div>
      </div>

      <div className={`${visiblePage === 3 ? "block" : "hidden"} pt-3 pl-5`}>
        <h2 className="font-bold pt-5 pb-3">Warunki zwrotów</h2>
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
