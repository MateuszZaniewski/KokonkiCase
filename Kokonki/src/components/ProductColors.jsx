import Color from "./Boxes/Color";

export default function ProductColors({ colors }) {
  return (
    <div>
      <div className="flex xl:gap-40 pt-7">
        <span>Kolor - średni brąz (mix 0612)</span>
        <span>Dostępne: {colors.length}</span>
      </div>
      <div className="flex flex-wrap xl:pt-5 xl:gap-[10px] xl:max-w-[380px]">
        {colors.map((item, index) => (
          <Color key={index} color={item} />
        ))}
      </div>
    </div>
  );
}
