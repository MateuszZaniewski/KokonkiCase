import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="flex xl:gap-20 xl:justify-center xl:pt-5">
      <Link to={"/nowosci"} className="hover:text-[#F6C48F]">
        Nowości
      </Link>
      <Link to={"/wloczki"} className="hover:text-[#F6C48F]">
        Włóczki
      </Link>
      <Link to={"/akcesoria"} className="hover:text-[#F6C48F]">
        Akcesoria
      </Link>
      <Link to={"/promocje"} className="hover:text-[#F6C48F]">
        Promocje
      </Link>
      <Link to={"/blog"} className="hover:text-[#F6C48F]">
        Blog
      </Link>
    </div>
  );
}
