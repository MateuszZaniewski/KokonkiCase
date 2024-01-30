import arrowUpIcon from "../../assets/arrow-up.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import DetailsSingleRow from "./DetailsSingleRow";
export default function Details({ visiblePage, setVisiblePage, product }) {
  return (
    <div
      onClick={() => setVisiblePage(2)}
      className="xl:w-[538px] border-b-2 border-black py-4"
    >
      <div className="flex justify-between cursor-pointer">
        <span className="uppercase xl:text-[13px] font-bold">Szczególy</span>
        <img src={visiblePage === 2 ? arrowUpIcon : arrowDownIcon} />
      </div>

      <div className={`${visiblePage === 2 ? "block" : "hidden"} pt-3 px-5`}>
        <div className="flex-col">
          <DetailsSingleRow category="Materiał: " text={product[0].material} />
          <DetailsSingleRow
            category="Grupa włóczek: "
            text={product[0].group}
          />
          <DetailsSingleRow
            category="Waga/długość motka: "
            text={product[0].wage}
          />
          <DetailsSingleRow
            category="Zalecany rozmiar drutów: "
            text={product[0].recomended}
          />
          <DetailsSingleRow category="Próbka: " text={product[0].case} />
          <DetailsSingleRow
            category="Pielęgnacja: "
            text={product[0].wash}
            wash={true}
          />
          <DetailsSingleRow
            category="Superwash: "
            text={product[0].superwash}
          />
          <DetailsSingleRow category="Made in: " text={product[0].madein} />
          <DetailsSingleRow
            category="Pochodzenie surowca: "
            text={product[0].source}
          />
        </div>
      </div>
    </div>
  );
}
