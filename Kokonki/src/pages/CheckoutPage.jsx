import { Link } from "react-router-dom";
import { useCartStore } from "../store/store";
import Navbar from "./../components/Navbar";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <Link to="/">Home</Link>
      <Navbar />
      {cart.map((item) => {
        return (
          <div key={item}>
            <span>{item.name} </span>
            <span>{item.quantity}</span>
            <span>{item.price}</span>
          </div>
        );
      })}
    </div>
  );
}
