import { useState, useEffect } from "react";

export default function QuickCartCount({ count, onCountChange }) {
  const [quantity, setQuantity] = useState(count);

  useEffect(() => {
    setQuantity(count);
  }, [count]);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      onCountChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    onCountChange(quantity + 1);
  };

  const handleInputChange = (event) => {
    const inputQuantity = parseInt(event.target.value, 10);

    if (!isNaN(inputQuantity) && inputQuantity >= 1) {
      setQuantity(inputQuantity);
      onCountChange(inputQuantity);
    }
  };

  return (
    <div className="flex">
      <button
        className="text-2xl border border-black rounded-tl-2xl rounded-bl-2xl px-2"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className="w-14 text-center border-b border-t border-black bg-transparent"
        type="number"
        value={quantity}
        onChange={handleInputChange}
      ></input>
      <button
        className="text-2xl border border-black rounded-tr-2xl rounded-br-2xl px-2"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
