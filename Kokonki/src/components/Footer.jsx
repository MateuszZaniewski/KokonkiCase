import logo from "../assets/logo.svg";
export default function Footer() {
  const listClass =
    "first:font-bold first:xl:text-[13px] first:xl:pb-5 first:hover:text-[#222220] first:hover:cursor-default xl:pb-[10px] lg:pb-[8px] md:pb-[6px] pb-[5px] cursor-pointer hover:text-[#F6C48F]";

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
      <div className="xl:pl-16 pl-2">
        <img
          src={logo}
          className="w-[18.7wv] h-[10vw] md:h-[5vw] lg:h-[4vw] xl:h-[4.2vw] max-w-[340px] max-h-[60px]"
        />
      </div>
      <div className="mx-auto flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 md:gap-8 lg:gap-10 xl:gap-20 lg:justify-around pt-10 text-[#222220] px-[4vw] md:px-[7vw] lg:px-[10vw] xl:px-[13.6vw]">
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
