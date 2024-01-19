import { Link } from "react-router-dom";
export default function HomePage() {
  const n = 2;
  return (
    <div>
      This is Home Page
      <ul>
        <li>
          <Link to={`product/${n}`}>Product</Link>
        </li>
        <li>
          <Link to={`checkout`}>Checkout</Link>
        </li>
      </ul>
    </div>
  );
}
