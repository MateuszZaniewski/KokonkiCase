import Links from "../components/Links";
import Navbar from "../components/Navbar";
import ProductOverview from "../components/ProductOverview";

export default function HomePage() {
  return (
    <div className="font-inter bg-[#F9F8F9]">
      <Navbar />
      <Links />
      <ProductOverview />
    </div>
  );
}
