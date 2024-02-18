export default function Prices({ priceNow, priceLast, priceMonth }) {
  return (
    <div>
      <div className="flex gap-3 xl:gap-9">
        <div className="flex items-end xl:text-[31px]">
          <span>{priceNow.toFixed(2)} zł</span>
        </div>
        <div className="flex items-end line-through ">
          <span>{priceLast.toFixed(2)} zł</span>
        </div>
      </div>
      <div className="py-2 xl:py-0">
        <span className="xl:text-[13px]">
          Najniższa cena z ostatnich 30 dni: {priceMonth.toFixed(2)} zł
        </span>
      </div>
    </div>
  );
}
