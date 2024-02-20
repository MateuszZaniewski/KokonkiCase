import step1 from "../../assets/step1.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useEffect, useState } from "react";
import Select from "react-select";
import "../../index.css";

export default function CartStep1({ firstForm, setFirstForm }) {
  console.log(firstForm);
  const [open, setOpen] = useState(true);
  const styles =
    "border-b border-black bg-[#F9F8F9] pb-1 lg:max-w-[427px] outline-none";
  const stylesCountry = "bg-[#F9F8F9] pb-1 lg:max-w-[427px] outline-none";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFirstForm((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleCountryChange = (e) => {
    setFirstForm((prevState) => ({
      ...prevState,
      country: e.label.slice(5),
    }));
    setSelectedCountry(e.target);
  };

  const handleSameFVAdress = (e) => {
    setFirstForm((prevState) => ({
      ...prevState,
      same: e.target.checked,
    }));
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code",
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <div className="border-black bg-[#F9F8F9] lg:mr-28 lg:border-b-2 lg:py-5">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-1">
          <img src={step1} />
          <span className="text-[20px] font-semibold">
            Adres doręczenia i dane do faktury
          </span>
        </div>
        <div>
          <img src={open ? arrowUpIcon : arrowDownIcon} />
        </div>
      </div>
      <div className={open ? "block lg:pl-8 lg:pt-5" : "hidden"}>
        <form className="flex flex-col gap-5 text-[16px] placeholder:text-[#554A4A] ">
          <span>Adres doręczenia</span>
          <input
            name="name"
            value={firstForm.name}
            onChange={handleChange}
            className={styles}
            placeholder="Imię i Nazwisko"
          ></input>
          <input
            name="street"
            value={firstForm.street}
            onChange={handleChange}
            className={styles}
            placeholder="Ulica"
          ></input>
          <input
            name="house"
            value={firstForm.house}
            onChange={handleChange}
            className={styles}
            placeholder="Nr domu/mieszkania"
          ></input>
          <div className="flex justify-between gap-3 lg:max-w-[427px]">
            <input
              name="postalCode"
              value={firstForm.postalCode}
              onChange={handleChange}
              className={styles}
              placeholder="Kod pocztowy"
            ></input>
            <input
              name="city"
              value={firstForm.city}
              onChange={handleChange}
              className={styles}
              placeholder="Miasto"
            ></input>
          </div>
          <div className="flex items-center gap-1 border-b border-black lg:max-w-[427px]">
            <Select
              options={countries}
              value={selectedCountry}
              onChange={handleCountryChange}
              className="lg:max-w-[427px]] w-full border-none bg-[#F9F8F9] outline-none"
              styles={{
                control: (provided) => ({
                  ...provided,
                  border: "none",
                  backgroundColor: "#F9F8F9",
                }),
              }}
              placeholder="Kraj"
            />
          </div>
          <input
            name="phone"
            value={firstForm.phone}
            onChange={handleChange}
            className={styles}
            placeholder="Telefon"
          ></input>
          <input
            name="email"
            value={firstForm.email}
            onChange={handleChange}
            className={styles}
            placeholder="Email"
          ></input>
          <input
            name="suggestions"
            value={firstForm.suggestions}
            onChange={handleChange}
            className={styles}
            placeholder="Uwagi dodatkowe (opcjonalnie)"
          ></input>
          <div>
            <input name="same" type="checkbox" onChange={handleSameFVAdress} />
            <span className="pl-2">
              Adres do faktury jest taki sam jak adres dostawy
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
