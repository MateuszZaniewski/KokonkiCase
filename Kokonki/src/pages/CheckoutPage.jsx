import { useContext } from "react";
import { AppContext } from "../AppProvider";
export default function CheckoutPage() {
  const { product } = useContext(AppContext);

  console.log(product);

  return <div>Not product</div>;
}
