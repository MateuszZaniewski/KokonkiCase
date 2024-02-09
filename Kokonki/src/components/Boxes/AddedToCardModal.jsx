import closeIcon from "../../assets/close.svg";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

export default function AddedToCardModal() {
  const { product, quantity, setShowAddedToCardModal } = useContext(AppContext);
  if (product && product.length > 0) {
    return (
      <div>
        <div
          onClick={() => setShowAddedToCardModal(false)}
          className="fixed z-10 top-0 right-0 w-[100vw] h-[100vh] bg-transparent backdrop-blur-[2px] brightness-50"
        ></div>
        <div
          className={`fixed xl:top-1/2 top-1/4 left-1/2 transform -translate-x-1/2 xl:-translate-y-1/2 -translate-y-1/4 z-10 xl:w-[600px] h-auto bg-[#F9F8F9] rounded-xl`}
        >
          <div className="flex flex-col h-full xl:px-[97px] xl:pt-12 px-4 py-4 w-[80vmin] xl:w-auto ">
            <div className="flex justify-between items-center xl:pb-8 pb-4">
              <span>DODANO DO KOSZYKA</span>
              <img
                onClick={() => setShowAddedToCardModal(false)}
                src={closeIcon}
                className="h-[10px] w-[10px]"
              />
            </div>
            <div className="flex flex-col md:flex-row xl:flex-row xl:gap-5 gap-3 mx-auto md:mx-0">
              <div>
                <img
                  src={product[0].images[0]}
                  className="xl:w-[170px] xl:h-[170px] w-[220px] h-[220px]"
                />
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <span className="font-semibold text-[20px] xl:pb-1">
                    {product[0].name}
                  </span>
                  <span className="pb-5">średni brąz (mix 0612)</span>
                  <span className="pb-1">{"Ilość: " + quantity}</span>
                  <span className="text-[16px] pb-5">
                    {"Cena: " +
                      product[0].pricenow.toString().split(".").join(",") +
                      " zł"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-center xl:gap-4 xl:pt-[30px] md:pt-5">
              <button
                onClick={() => setShowAddedToCardModal(false)}
                className={`border-2 border-[#2A4746] xl:max-w-[194px] rounded-full xl:py-[10px] xl:px-[15px] hover:opacity-90`}
              >
                Kontynuuj zakupy
              </button>

              <button
                onClick={() => setShowAddedToCardModal(false)}
                className={`border-2 border-[#2A4746] xl:max-w-[194px] bg-[#2A4746] text-white rounded-full xl:py-[10px] xl:px-[15px] hover:opacity-90`}
              >
                Przejdź do koszyka
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
