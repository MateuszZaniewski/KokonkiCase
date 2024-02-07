import Color from "./Boxes/Color";
export default function ProductColors({ colors }) {
  return (
    <div className="w-full md:w-[450px] lg:w-[600px] xl:w-[500px]">
      <div className="flex xl:gap-40 gap-5 pt-7 pb-4 xl:pb-0">
        <span>Kolor - średni brąz (mix 0612)</span>
        <span>Dostępne: {colors.length}</span>
      </div>
      <div className="flex flex-wrap xl:pt-5 xl:gap-[10px] gap-3 xl:max-w-[380px]">
        {colors.map((item, index) => (
          <Color key={index} color={item} />
        ))}
      </div>
    </div>
  );
}
