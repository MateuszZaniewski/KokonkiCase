import { useCartStore } from "../store/store";
import Navbar from "./../components/Navbar";
import Links from "./../components/Links";
import Cart from "../components/CartComponents/Cart";
import Footer from "./../components/Footer";

export default function CheckoutPage() {
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  return (
    <div className="bg-[#F9F8F9]">
      <Navbar />
      <Links />
      <Cart />
      <Footer />
    </div>
  );
}

// {cart.map((item) => {
//   return (
//     <div key={item}>
//       <span>{item.name} </span>
//       <span>{item.quantity}</span>
//       <span>{item.price}</span>
//     </div>
//   );
// })}
