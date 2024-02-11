import { Link } from "react-router-dom";
import "../index.css";

export default function HomePage() {
  return (
    <div>
      <h1>This is a home page</h1>
      <div className="flex flex-col">
        <Link to="/product/Drops Nepal">Go to product</Link>
        <Link to="/checkout">Go to checkout</Link>
      </div>
    </div>
  );
}
