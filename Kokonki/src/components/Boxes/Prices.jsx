export default function Prices({ priceNow, priceLast, priceMonth }) {
  return (
    <div>
      <div className="flex xl:gap-9">
        <div className="xl:text-[31px] flex items-end">
          <span>{priceNow.toFixed(2)} zł</span>
        </div>
        <div className="flex items-end line-through ">
          <span>{priceLast.toFixed(2)} zł</span>
        </div>
      </div>
      <div>
        <span className="xl:text-[13px]">
          Najniższa cena z ostatnich 30 dni: {priceMonth.toFixed(2)} zł
        </span>
      </div>
    </div>
  );
}
