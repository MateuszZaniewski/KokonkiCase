import { Link } from "react-router-dom";
export default function ObserverInsta() {
  return (
    <>
      <div className="hidden text-[#222220] xl:flex xl:px-[122px] xl:pb-10">
        <div className="flex items-center justify-center pr-24 text-center">
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
        <div className="grid grid-cols-6 grid-rows-5 gap-5 xl:h-[540px] xl:w-[720px]">
          <div className="col-start-2 place-self-center xl:h-[92px] xl:w-[103px]">
            <div className="h-full w-full bg-[url('./assets/circleBrown.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>

          <div className="col-span-3 col-start-4 row-span-3 place-self-center xl:h-[316px] xl:w-[350px]">
            <div className="h-full w-full bg-[url('./assets/sweater.svg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="col-span-2 col-start-4 row-span-2 row-start-4 place-self-center xl:h-[204px] xl:w-[226px] ">
            <div className="h-full w-full bg-[url('./assets/knitting.svg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="col-start-6 row-start-4 place-self-center xl:h-[92px] xl:w-[103px]">
            <div className="h-full w-full bg-[url('./assets/circleBrown.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>

          <div className="col-start-3 row-start-2 place-self-center xl:h-[90px] xl:w-[103px]">
            <div className=" h-full w-full bg-[url('./assets/serweta.svg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="col-start-1 row-start-5 mb-4 place-self-center xl:h-[92px] xl:w-[103px]">
            <div className="h-full w-full bg-[url('./assets/dedog.svg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="col-span-2 col-start-2 row-span-2 row-start-3 place-self-center xl:h-[204px] xl:w-[226px]">
            <div className=" h-full w-full bg-[url('./assets/colorKnit.svg')] bg-cover bg-center bg-no-repeat"></div>
          </div>

          <div className="col-start-3 row-start-5 place-self-center xl:h-[92px] xl:w-[103px]">
            <div className="h-[70%] w-[70%] bg-[url('./assets/circleRed.svg')] bg-contain bg-center bg-no-repeat"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 h-72 w-auto px-4 text-center text-white md:w-[550px] lg:w-[700px] xl:hidden">
        <div className="h-full w-full">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-[url('./assets/sweater.svg')] bg-cover bg-center bg-no-repeat">
            <h2 className="text-[25px]">Obserwuj nas na Instagramie</h2>
            <Link
              to={"https://www.instagram.com/kokonki.motki/"}
              className="xl:text-[49px]"
            >
              @kokonki.pl
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// w-103px
// w-92px
