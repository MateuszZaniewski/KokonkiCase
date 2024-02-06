import circleRed from "../assets/circleRed.svg";
import circleBrown from "../assets/circleBrown.svg";
import CtaButton from "./Boxes/CtaButton";
export default function Newsletter() {
  return (
    <div className="flex text-[#222220] xl:pb-24 pt-6 xl:pt-0">
      <div className="w-1/4 flex justify-center xl:pt-4">
        <img src={circleBrown} className="xl:h-[190px] xl:w-[190px]" />
      </div>
      <div className="w-1/2 text-center xl:pt-28">
        <h2 className="xl:text-[39px] font-semibold xl:pb-4">
          Dołącz do naszego newslettera
        </h2>
        <h3 className="xl:text-[20px] font-semibold xl:pb-14">
          Skorzystaj ze zniżki 10%
        </h3>
        <input
          className=" placeholder:text-[#58595B] text-center bg-transparent border-b border-black xl:pb-3 xl:min-w-[460px] placeholder:text-center outline-none"
          placeholder="Wpisz swój adres mailowy"
          type="email"
        ></input>
        <form className="xl:pt-8">
          <input type="radio"></input>
          <span className="pl-1">
            Przeczytałem i rozumiałem Regulamin i Politykę prywatności
          </span>
          <div className=" xl:pt-16">
            <CtaButton text="Subskrybuj" background="bg-transparent" />
          </div>
        </form>
      </div>
      <div className="w-1/4 flex justify-center items-end xl:pb-7 xl:pr-60">
        <img src={circleRed} className="xl:h-[115px] xl:w-[115px]" />
      </div>
    </div>
  );
}
