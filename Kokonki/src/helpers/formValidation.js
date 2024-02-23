export const validateForm1 = (form) => {
  const { name, street, house, postalCode, city, country, phone, email } = form;

  const error = {
    nameError: false,
    streetError: false,
    houseError: false,
    postalCodeError: false,
    cityError: false,
    countryError: false,
    phoneError: false,
    emailError: false,
  };

  if (name.length < 1) {
    error.nameError = true;
  }
  if (street.length < 1) {
    error.streetError = true;
  }
  if (house.length < 1) {
    error.houseError = true;
  }
  if (postalCode.length < 1) {
    error.postalCodeError = true;
  }
  if (city.length < 1) {
    error.cityError = true;
  }
  if (country.length < 1) {
    error.countryError = true;
  }
  if (phone.length < 4) {
    error.phoneError = true;
  }
  if (email.length < 1) {
    error.emailError = true;
  }

  return error.length === 0 ? false : error;
};
