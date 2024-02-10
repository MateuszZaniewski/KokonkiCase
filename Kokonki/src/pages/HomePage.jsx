import { Link } from "react-router-dom";
import { useVisibilityStore } from "../store/store";
import "../index.css";

export default function HomePage() {
  const visi = useVisibilityStore((state) => state.visiblePage);
  const setVisi = useVisibilityStore((state) => state.setVisiblePage);
  return (
    <div>
      <h1>This is a home page</h1>
      <div className="flex flex-col">
        <Link to="/product/Drops Nepal">Go to product</Link>
        <Link to="/checkout">Go to checkout</Link>
      </div>
      {visi}

      <button
        onClick={() => setVisi(5)}
        className="px-2 py-1 border border-green"
      >
        Add 5
      </button>
    </div>
  );
}
