import Navbar from "./../components/Navbar";
import Links from "./../components/Links";
import Cart from "../components/CartComponents/Cart";
import Footer from "./../components/Footer";
import Logo from "../components/Logo";
import { useCartStore } from "../store/store";

export default function CheckoutPage() {
  const step = useCartStore((state) => state.step);
  return (
    <div className="bg-[#F9F8F9]">
      {step === 0 ? (
        <div>
          <Navbar />
          <Links />
        </div>
      ) : (
        <Logo />
      )}
      <Cart />
      <Footer />
    </div>
  );
}
