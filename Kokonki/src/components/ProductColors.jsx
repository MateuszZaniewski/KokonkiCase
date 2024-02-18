import Color from "./Boxes/Color";
export default function ProductColors({ colors }) {
  return (
    <div className="w-full md:w-[450px] lg:w-[600px] xl:w-[500px]">
      <div className="flex gap-5 pb-4 pt-7 xl:gap-40 xl:pb-0">
        <span>Kolor - średni brąz (mix 0612)</span>
        <span>Dostępne: {colors.length}</span>
      </div>
      <div className="flex flex-wrap gap-3 xl:max-w-[380px] xl:gap-[10px] xl:pt-5">
        {colors.map((item, index) => (
          <Color key={index} color={item} />
        ))}
      </div>
    </div>
  );
}
