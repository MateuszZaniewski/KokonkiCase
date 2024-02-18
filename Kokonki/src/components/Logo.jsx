import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Logo() {
  return (
    <div className="flex w-full justify-center pt-2">
      <Link to="/">
        <img src={logo} className="w-48 lg:h-auto lg:w-[20rem]" />
      </Link>
    </div>
  );
}
