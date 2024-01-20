import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="flex xl:gap-20 xl:justify-center xl:pt-5">
      <Link to={"/nowosci"} className="">
        Nowości
      </Link>
      <Link to={"wloczki"} className="">
        Włóczki
      </Link>
      <Link to={"akcesoria"} className="">
        Akcesoria
      </Link>
      <Link to={"promocje"} className="">
        Promocje
      </Link>
      <Link to={"blog"} className="">
        Blog
      </Link>
    </div>
  );
}
