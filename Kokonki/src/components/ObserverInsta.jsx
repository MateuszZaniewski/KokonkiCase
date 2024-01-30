import { Link } from "react-router-dom";
export default function ObserverInsta() {
  return (
    <div className="text-[#222220] flex xl:px-[122px] xl:pb-10">
      <div className="flex text-center justify-center items-center pr-24">
        <div>
          <h2 className="xl:text-[25px]">Obserwuj nas na Instagramie</h2>
          <Link
            to={"https://www.instagram.com/kokonki.motki/"}
            className="xl:text-[49px]"
          >
            @kokonki.pl
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-6 grid-rows-5 gap-5 xl:w-[720px] xl:h-[540px]">
        <div className="col-start-2 place-self-center xl:w-[103px] xl:h-[92px]">
          <div className="bg-[url('./assets/circleBrown.svg')] bg-contain bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-span-3 row-span-3 col-start-4 place-self-center xl:w-[350px] xl:h-[316px]">
          <div className="bg-[url('./assets/sweater.svg')] bg-cover bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-span-2 row-span-2 col-start-4 row-start-4 place-self-center xl:w-[226px] xl:h-[204px] ">
          <div className="bg-[url('./assets/knitting.svg')] bg-cover bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-start-6 row-start-4 place-self-center xl:w-[103px] xl:h-[92px]">
          <div className="bg-[url('./assets/circleBrown.svg')] bg-contain bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-start-3 row-start-2 place-self-center xl:w-[103px] xl:h-[90px]">
          <div className=" bg-[url('./assets/serweta.svg')] bg-cover bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-start-1 row-start-5 place-self-center xl:w-[103px] xl:h-[92px] mb-4">
          <div className="bg-[url('./assets/dedog.svg')] bg-cover bg-no-repeat bg-center h-full w-full"></div>
        </div>

        <div className="col-span-2 row-span-2 col-start-2 row-start-3 place-self-center xl:w-[226px] xl:h-[204px]">
          <div className=" bg-[url('./assets/colorKnit.svg')] bg-cover bg-no-repeat bg-center w-full h-full"></div>
        </div>

        <div className="col-start-3 row-start-5 place-self-center xl:w-[103px] xl:h-[92px]">
          <div className="bg-[url('./assets/circleRed.svg')] bg-contain bg-no-repeat bg-center w-[70%] h-[70%]"></div>
        </div>
      </div>
    </div>
  );
}

// w-103px
// w-92px
