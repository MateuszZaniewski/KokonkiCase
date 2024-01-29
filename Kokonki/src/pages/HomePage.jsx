import Footer from "../components/Footer";
import Links from "../components/Links";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import ObserverInsta from "../components/ObserverInsta";
import ProductOverview from "../components/ProductOverview";

export default function HomePage() {
  return (
    <div className="font-inter bg-[#F9F8F9] max-w-[1440px] mx-auto xl:min-h-[100vh]">
      <Navbar />
      <Links />
      <ProductOverview />
      <Newsletter />
      <ObserverInsta />
      <Footer />
    </div>
  );
}
