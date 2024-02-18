import { useCartStore } from "../../store/store";
export function OrderMiniature() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.name} className="flex items-start gap-4 pt-3">
            <div>
              <img className=" h-36 w-32 " src={cartItem.image} />
            </div>
            <div className="flex flex-col">
              <span>Nazwa : {cartItem.name}</span>
              <span>Ilość : {cartItem.quantity}</span>
              <span>
                Cena :{" "}
                {(cartItem.price * cartItem.quantity)
                  .toFixed(2)
                  .split(".")
                  .join(",")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
