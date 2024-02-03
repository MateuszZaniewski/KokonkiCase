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
          className="absolute z-10 top-0 right-0 w-[100vw] h-[100vh] border border-green-500 bg-transparent backdrop-blur-[2px] brightness-50"
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 xl:w-[600px] xl:h-[400px] bg-[#F9F8F9] rounded-xl ">
          <div className="flex flex-col h-full xl:px-[97px] xl:pt-12 ">
            <div className="flex justify-between items-center xl:pb-8">
              <span>DODANO DO KOSZYKA</span>
              <img
                onClick={() => setShowAddedToCardModal(false)}
                src={closeIcon}
                className="h-[10px] w-[10px]"
              />
            </div>
            <div className="flex xl:gap-5">
              <div>
                <img
                  src={product[0].images[0]}
                  className="xl:w-[170px] xl:h-[170px]"
                />
              </div>
              <div>
                <div className="flex flex-col w-full">
                  <span className="font-semibold xl:text-[20px] xl:pb-1">
                    {product[0].name}
                  </span>
                  <span className="xl:pb-5">średni brąz (mix 0612)</span>
                  <span className="xl:pb-1">{"Ilość: " + quantity}</span>
                  <span className="xl:text-[16px] xl:pb-5">
                    {"Cena: " +
                      product[0].pricenow.toString().split(".").join(",") +
                      " zł"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex xl:gap-4 xl:pt-[30px]">
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
