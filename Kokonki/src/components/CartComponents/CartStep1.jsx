import step1 from "../../assets/step1.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import arrowUpIcon from "../../assets/arrow-up.svg";
import { useEffect, useState } from "react";
import Select from "react-select";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../../index.css";

export default function CartStep1({ firstForm, setFirstForm }) {
  const [open, setOpen] = useState(true);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [phone, setPhone] = useState("");
  const styles =
    "border-b border-black bg-[#F9F8F9] pb-1 lg:max-w-[427px] outline-none";

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

  const handlePhoneChange = (e) => {
    setFirstForm((prevState) => ({
      ...prevState,
      phone: e,
    }));
    setPhone(e);
  };

  const handleSameFVAdress = (e) => {
    setFirstForm((prevState) => ({
      ...prevState,
      same: e.target.checked,
    }));
  };

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
    <div className="border-b-2 border-black bg-[#F9F8F9] py-5 lg:mr-28">
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
      <div className={open ? "block pt-5 md:pl-8" : "hidden"}>
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
              className={`${styles} w-[100%]`}
              placeholder="Kod pocztowy"
            ></input>
            <input
              name="city"
              value={firstForm.city}
              onChange={handleChange}
              className={`${styles} w-[100%]`}
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
          <div className="w-full">
            <PhoneInput
              style={{
                width: "100%",
                maxWidth: "427px",
                backgroundColor: "#F9F8F9",
                border: "none",
                borderBottom: "1px solid black",
                paddingBottom: "4px",
              }}
              inputStyle={{
                width: "100%",
                border: "none",
                backgroundColor: "transparent",
                outline: "none",
                fontSize: "16px",
              }}
              buttonStyle={{
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0",
                border:
                  "1px solid var(--react-international-phone-country-selector-border-color, var(--react-international-phone-border-color, gainsboro))",
                margin: "0",
                appearance: "button",
                WebkitAppearance: "button",
                backgroundColor: "#F9F8F9", // Changed the background color here
                cursor: "pointer",
                textTransform: "none",
                userSelect: "none",
              }}
              buttonContentStyle={{
                backgroundColor: "#F9F8F9", // Changed the background color here as well
              }}
              name="phone"
              defaultCountry="pl"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
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
