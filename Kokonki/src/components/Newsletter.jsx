import circleRed from "../assets/circleRed.svg";
import circleBrown from "../assets/circleBrown.svg";
import CtaButton from "./Boxes/CtaButton";
export default function Newsletter() {
  return (
    <div className="flex flex-col xl:flex-row text-[#222220] xl:pb-24 pt-6 xl:pt-0 md:w-[450px] lg:w-[600px] xl:w-auto mx-auto xl:mx-0">
      <div className="xl:w-1/4 flex justify-start pl-4 pb-4 xl:pb-0 xl:pl-0 xl:justify-center xl:pt-4">
        <img
          src={circleBrown}
          className="xl:h-[190px] xl:w-[190px] w-20 h-20"
        />
      </div>
      <div className="xl:w-1/2 text-center xl:pt-28">
        <h2 className="xl:text-[39px] text-[22px] font-semibold pb-4">
          Dołącz do naszego newslettera
        </h2>
        <h3 className="xl:text-[20px] font-semibold pb-14">
          Skorzystaj ze zniżki 10%
        </h3>
        <input
          className=" placeholder:text-[#58595B] text-center bg-transparent border-b border-black pb-3 xl:min-w-[460px] placeholder:text-center outline-none"
          placeholder="Wpisz swój adres mailowy"
          type="email"
        ></input>
        <form className="xl:pt-8 px-2 xl:px-0">
          <input type="radio"></input>
          <span className="pl-1">
            Przeczytałem i rozumiałem Regulamin i Politykę prywatności
          </span>
          <div className="xl:pt-16 pt-4">
            <CtaButton text="Subskrybuj" background="bg-transparent" />
          </div>
        </form>
      </div>
      <div className="xl:w-1/4 flex xl:justify-center justify-end xl:pt-0 pt-5 pr-10 items-end xl:pb-7 xl:pr-60">
        <img src={circleRed} className="xl:h-[115px] xl:w-[115px] w-20 h-20" />
      </div>
    </div>
  );
}
