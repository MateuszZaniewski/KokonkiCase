import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product/Drops Nepal">Product</Link>
    </div>
  );
}

export default App;
