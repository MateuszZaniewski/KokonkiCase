import { useState } from "react";
import CartStep1 from "./CartStep1";
import CartStep2 from "./CartStep2";
import CartStep3 from "./CartStep3";
export default function CartStep() {
  return (
    <div>
      <CartStep1 />
      <CartStep2 />
      <CartStep3 />
    </div>
  );
}
