import "./index.css";
import { useContext } from "react";
import { AppContext } from "./AppProvider";

function App() {
  const { product } = useContext(AppContext);

  console.log(product);
  return <div>Hello App Js</div>;
}

export default App;
