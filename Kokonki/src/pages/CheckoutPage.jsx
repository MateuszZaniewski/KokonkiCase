import { useContext } from "react";
import { AppContext } from "../AppProvider";
export default function CheckoutPage() {
  const { cart } = useContext(AppContext);

  console.log(cart);

  return <div>Not product</div>;
}
