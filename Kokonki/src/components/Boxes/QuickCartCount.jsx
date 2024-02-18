import { useCartStore } from "../../store/store";

export default function QuickCartCount() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const handleDecrease = () => {
    if (cart[0].quantity > 1) {
      decreaseQuantity(cart[0].name, 1);
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
        className="rounded-bl-2xl rounded-tl-2xl border border-black px-2 text-2xl"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        className="w-14 border-b border-t border-black bg-transparent text-center"
        type="number"
        value={cart[0].quantity}
        onChange={handleChange}
      ></input>
      <button
        className="rounded-br-2xl rounded-tr-2xl border border-black px-2 text-2xl"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
