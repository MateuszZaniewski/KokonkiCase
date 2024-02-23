import { useNavigate } from "react-router-dom";
export default function SuccessPurchase({ showSuccess, setShowSuccess }) {
  const navigate = useNavigate();
  const handleSuccess = () => {
    setShowSuccess(false);
    navigate("/");
  };
  return (
    <div onClick={handleSuccess}>
      <div
        onClick={handleSuccess}
        className="fixed right-0 top-0 z-10 h-[100vh] w-[100vw] bg-transparent brightness-50 backdrop-blur-[2px]"
      ></div>
      <div
        className={`fixed left-1/2 top-1/4 z-10 h-auto -translate-x-1/2 -translate-y-1/4 transform rounded-2xl bg-[#F9F8F9] xl:top-1/2 xl:w-[600px] xl:-translate-y-1/2`}
      >
        <div className="flex h-full w-[80vmin] flex-col rounded-2xl bg-green-200 px-4 py-4 text-center xl:w-auto xl:px-[97px] xl:py-12 ">
          <p className="">Twój koszyk został pomyślnie zamówiony!</p>
          <p>Z niecierpliwością czekamy na Twoje nowe dzierganie!</p>
          <p
            onClick={handleSuccess}
            className="cursor-pointer pt-5 text-[14px] text-blue-500"
          >
            Wróć do przeglądania naszego sklepu
          </p>
        </div>
      </div>
    </div>
  );
}
