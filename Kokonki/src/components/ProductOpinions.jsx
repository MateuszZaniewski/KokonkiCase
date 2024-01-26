import Pagination from "./Boxes/Pagination";
import Star from "./Boxes/Star";
export default function ProductOpinions({ product }) {
  if (product && product.length > 0) {
    console.log(product[0].opinions);

    const rating = product[0].opinions.map((opinion) => {
      let summary = 0;
      summary += opinion.rate;
      return summary;
    });

    console.log(rating.reduce((a, b) => a + b) / product[0].opinions.length);
    return (
      <div className="flex xl:pl-14 xl:pb-11 xl:pt-16">
        <div className=" w-1/2">
          <div className="pb-2">
            <Star
              rating={
                rating.reduce((a, b) => a + b) / product[0].opinions.length
              }
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-1">
              <h2 className="font-bold xl:text-[20px]">Opinie</h2>
              <span className="xl:text-[13px]">
                ({product[0].opinions.length})
              </span>
            </div>
            <div>
              <button
                className={`border-2 border-[#2A4746] rounded-full px-7 py-2 w-fit`}
              >
                Dodaj opinię
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2 pr-14">
          <div>
            <Pagination opinions={product[0].opinions} />
          </div>
        </div>
      </div>
    );
  }
}
