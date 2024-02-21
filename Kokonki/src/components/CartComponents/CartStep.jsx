import { useState } from "react";
import CartStep1 from "./CartStep1";
import CartStep2 from "./CartStep2";
import CartStep3 from "./CartStep3";
export default function CartStep({
  firstForm,
  secondForm,
  thirdForm,
  setFirstForm,
  setSecondForm,
  setThirdForm,
}) {
  return (
    <div>
      <CartStep1 firstForm={firstForm} setFirstForm={setFirstForm} />
      <CartStep2 secondForm={secondForm} setSecondForm={setSecondForm} />
      <CartStep3 thirdForm={thirdForm} setThirdForm={setThirdForm} />
    </div>
  );
}
