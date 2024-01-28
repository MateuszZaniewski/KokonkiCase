import circleBrownImage from "../assets/circleBrown.svg";
import circleRedImage from "../assets/circleRed.svg";
import sweaterImage from "../assets/sweater.svg";
import knittingImage from "../assets/knitting.svg";
import serwetaImage from "../assets/serweta.svg";
import dedogImage from "../assets/dedog.svg";
import colorKnitImage from "../assets/colorKnit.svg";

// 1 circleBrown
// 2 sweater.svg
// 3 knitting.svg
// 4 circleBrown
// 5 serweta.svg
// 6 dedog.svg
// 7 colorKnit.svg
// 8 circleRed
export default function ObserverInsta() {
  return (
    <div className="text-[#222220] flex">
      <div className="w-1/2 flex text-center justify-center items-center">
        <div>
          <h2 className="xl:text-[25px]">Obserwuj nas na Instagramie</h2>
          <span className="xl:text-[49px]">@kokonki.pl</span>
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-5 gap-5 w-1/2 border border-red-400 xl:w-[700px] xl:h-[540px]">
        <div className="col-start-2 place-self-center">
          <img className="xl:w-[86px] xl:h-[86px]" src={circleBrownImage} />
        </div>
        <div className="col-span-3 row-span-3 col-start-4 place-self-center xl:w-[335px] xl:h-[335px]">
          <img className="h-full w-full" src={sweaterImage} />
        </div>
        <div className="col-span-2 row-span-2 col-start-4 row-start-4 place-self-center">
          <img className="xl:w-44 xl:h-44" src={knittingImage} />
        </div>
        <div className="col-start-6 row-start-4 place-self-center">
          <img className="xl:w-[86px] xl:h-[86px]" src={circleBrownImage} />
        </div>
        <div className="col-start-3 row-start-2 place-self-center">
          <img className="xl:w-28 xl:h-28" src={serwetaImage} />
        </div>
        <div className="col-start-1 row-start-5 place-self-center">
          <img className="xl:w-28 xl:h-28" src={dedogImage} />
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-3 place-self-center">
          <img className="xl:w-[233px] xl:h-[223px]" src={colorKnitImage} />
        </div>
        <div className="col-start-3 row-start-5 place-self-center">
          <img className="xl:w-14 xl:h-14" src={circleRedImage} />
        </div>
      </div>
    </div>
  );
}
