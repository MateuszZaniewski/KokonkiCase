import closeIcon from "../../assets/close.svg";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function AddedToCardModal() {
  const { product, quantity, setShowAddedToCardModal } = useContext(AppContext);

  if (product && product.length > 0) {
    return (
      <div>
        <div
          onClick={() => setShowAddedToCardModal(false)}
          className="fixed right-0 top-0 z-10 h-[100vh] w-[100vw] bg-transparent brightness-50 backdrop-blur-[2px]"
        ></div>
        <div
          className={`fixed left-1/2 top-1/4 z-10 h-auto -translate-x-1/2 -translate-y-1/4 transform rounded-xl bg-[#F9F8F9] xl:top-1/2 xl:w-[600px] xl:-translate-y-1/2`}
        >
          <div className="flex h-full w-[80vmin] flex-col px-4 py-4 xl:w-auto xl:px-[97px] xl:py-12 ">
            <div className="flex items-center justify-between pb-4 xl:pb-8">
              <span>DODANO DO KOSZYKA</span>
              <img
                onClick={() => setShowAddedToCardModal(false)}
                src={closeIcon}
                className="h-[10px] w-[10px]"
              />
            </div>
            <div className="mx-auto flex flex-col gap-3 md:mx-0 md:flex-row xl:flex-row xl:gap-5">
              <div>
                <img
                  src={product[0].images[0]}
                  className="h-[220px] w-[220px] xl:h-[170px] xl:w-[170px]"
                />
              </div>
              <div>
                <div className="flex w-full flex-col">
                  <span className="text-[20px] font-semibold xl:pb-1">
                    {product[0].name}
                  </span>
                  <span className="pb-5">średni brąz (mix 0612)</span>
                  <span className="pb-1">{"Ilość: " + quantity}</span>
                  <span className="pb-5 text-[16px]">
                    {"Cena: " +
                      product[0].pricenow.toString().split(".").join(",") +
                      " zł"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-5 md:pt-5 xl:gap-4 xl:pt-[30px]">
              <button
                onClick={() => setShowAddedToCardModal(false)}
                className={`rounded-full border-2 border-[#2A4746] hover:opacity-90 xl:max-w-[194px] xl:px-[15px] xl:py-[10px]`}
              >
                Kontynuuj zakupy
              </button>

              <Link to="/checkout">
                <button
                  onClick={() => setShowAddedToCardModal(false)}
                  className={`rounded-full border-2 border-[#2A4746] bg-[#2A4746] text-white hover:opacity-90 xl:max-w-[194px] xl:px-[15px] xl:py-[10px]`}
                >
                  Przejdź do koszyka
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
