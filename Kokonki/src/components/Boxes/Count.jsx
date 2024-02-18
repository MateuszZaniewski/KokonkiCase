import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function Count() {
  const { quantity, setQuantity } = useContext(AppContext);
  return (
    <div className="flex gap-1 py-8">
      <button
        className="text-2xl"
        onClick={() => {
          quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
        }}
      >
        -
      </button>
      <input
        className=" w-14 border border-black text-center"
        type="number"
        value={quantity}
        onChange={() => setQuantity(quantity)}
      ></input>
      <button className="text-2xl" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
}
