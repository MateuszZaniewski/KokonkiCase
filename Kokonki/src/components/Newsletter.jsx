import circleRed from "../assets/circleRed.svg";
import circleBrown from "../assets/circleBrown.svg";
import CtaButton from "./Boxes/CtaButton";
export default function Newsletter() {
  return (
    <div className="mx-auto flex flex-col pt-6 text-[#222220] md:w-[450px] lg:w-[600px] xl:mx-0 xl:w-auto xl:flex-row xl:pb-24 xl:pt-0">
      <div className="flex justify-start pb-4 pl-4 xl:w-1/4 xl:justify-center xl:pb-0 xl:pl-0 xl:pt-4">
        <img
          src={circleBrown}
          className="h-20 w-20 xl:h-[190px] xl:w-[190px]"
        />
      </div>
      <div className="text-center xl:w-1/2 xl:pt-28">
        <h2 className="pb-4 text-[22px] font-semibold xl:text-[39px]">
          Dołącz do naszego newslettera
        </h2>
        <h3 className="pb-14 font-semibold xl:text-[20px]">
          Skorzystaj ze zniżki 10%
        </h3>
        <input
          className=" border-b border-black bg-transparent pb-3 text-center outline-none placeholder:text-center placeholder:text-[#58595B] xl:min-w-[460px]"
          placeholder="Wpisz swój adres mailowy"
          type="email"
        ></input>
        <form className="px-2 xl:px-0 xl:pt-8">
          <input type="radio"></input>
          <span className="pl-1">
            Przeczytałem i rozumiałem Regulamin i Politykę prywatności
          </span>
          <div className="pt-4 xl:pt-16">
            <CtaButton text="Subskrybuj" background="bg-transparent" />
          </div>
        </form>
      </div>
      <div className="flex items-end justify-end pr-10 pt-5 xl:w-1/4 xl:justify-center xl:pb-7 xl:pr-60 xl:pt-0">
        <img src={circleRed} className="h-20 w-20 xl:h-[115px] xl:w-[115px]" />
      </div>
    </div>
  );
}
