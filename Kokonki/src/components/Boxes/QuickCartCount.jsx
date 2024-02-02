import { useState } from "react";
export default function QuickCartCount() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex">
      <button
        className="text-2xl border border-black rounded-tl-2xl rounded-bl-2xl px-2"
        onClick={() => {
          quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
        }}
      >
        -
      </button>
      <input
        className=" w-14 text-center border-b border-t border-black bg-transparent"
        type="number"
        value={quantity}
        onChange={() => setQuantity(quantity)}
      ></input>
      <button
        className="text-2xl border border-black rounded-tr-2xl rounded-br-2xl px-2"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
