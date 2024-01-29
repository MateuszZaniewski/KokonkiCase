import logo from "../assets/logo.svg";
export default function Footer() {
  const listClass =
    "first:font-bold first:xl:text-[13px] first:xl:pb-5 first:hover:text-[#222220] first:hover:cursor-default xl:pb-[10px] cursor-pointer hover:text-[#F6C48F]";

  const shopLinks = [
    "ZAKUPY",
    "Dostawa",
    "Dostępność",
    "Formy płatności",
    "Czas realizacji zamówienia",
    "Zwroty i reklamacje",
    "Program lojalnościowy",
    "Hurt",
  ];
  const helpLinks = [
    "POMOC",
    "Blog",
    "FAQ - częste pytania",
    "Polityka prywatności",
    "Regulaminy",
    "CAL/KAL - wspólne dzierganie",
    "Tester kolorów chust",
    "Konfigurator motków",
  ];
  const accountLinks = [
    "MOJE KONTO",
    "Logowanie",
    "Newsletter",
    "Moje zamówienia",
    "Przechowalnia",
    "Ustawienia konta",
  ];
  const infoLinks = [
    "INFORMACJE",
    "O nas",
    "Kontakt",
    "Facebook",
    "Instagram",
    "Pomagamy",
    "Opinie Trustmate",
  ];
  return (
    <div className="xl:py-10">
      <div className="xl:pl-16">
        <img src={logo} className="xl:w-[270px] xl:h-[60px]" />
      </div>
      <div className="xl:px-[196px] mx-auto flex xl:gap-20 xl:pt-10 text-[#222220]">
        <ul>
          {shopLinks.map((link) => (
            <li className={listClass} key={link}>
              {link}
            </li>
          ))}
        </ul>
        <ul>
          {helpLinks.map((link) => (
            <li className={listClass} key={link}>
              {link}
            </li>
          ))}
        </ul>
        <ul>
          {accountLinks.map((link) => (
            <li className={listClass} key={link}>
              {link}
            </li>
          ))}
        </ul>
        <ul>
          {infoLinks.map((link) => (
            <li className={listClass} key={link}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
