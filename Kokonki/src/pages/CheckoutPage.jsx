import { Link } from "react-router-dom";
import { useCartStore } from "../store/store";
export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <Link to="/">Home</Link>

      {cart.map((item) => {
        return (
          <div key={item}>
            <span>{item.name} </span>
            <span>{item.quantity}</span>
          </div>
        );
      })}
    </div>
  );
}
