import { useCartStore } from "../../store/store";

export default function QuickCartCount() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreseQuantity = useCartStore((state) => state.decreseQuantity);

  const handleDecrease = () => {
    if (cart[0].quantity > 1) {
      decreseQuantity(cart[0].name, 1);
    }
  };

  const handleIncrease = () => {
    increaseQuantity(cart[0].name, 1);
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      increaseQuantity(cart[0].name, newQuantity - cart[0].quantity);
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
        value={cart[0].quantity}
        onChange={handleChange}
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
