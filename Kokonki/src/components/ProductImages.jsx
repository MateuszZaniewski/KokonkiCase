import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ProductImages() {
  const { product } = useContext(AppContext);
  const [activeImage, setActiveImage] = useState(null);
  const { name } = useParams();

  // Sets active first image from pool if theres none sets already
  useEffect(() => {
    if (product && product.length > 0 && product[0].images) {
      setActiveImage(product[0].images[0]);
    }
  }, [product]);

  if (product && product.length > 0 && product[0].images) {
    return (
      <>
        <div className="hidden w-full gap-5 xl:flex xl:min-w-[674px] xl:flex-row">
          <div className="hidden xl:flex xl:flex-col xl:space-y-5">
            {product[0].images.map((image) => (
              <img
                key={image}
                src={image}
                className="h-24 w-24 cursor-pointer"
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
          <div>
            <img src={activeImage} className="xl:h-[558px] xl:w-[558px]" />
          </div>
        </div>

        <div className="px-3 xl:hidden">
          <div className="flex justify-center">
            <img
              src={activeImage}
              className="h-[270px] max-h-[500px] w-[270px] max-w-[500px] rounded-md md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
            />
          </div>
          <div className="flex justify-center">
            <div className="flex justify-start gap-4 overflow-x-auto px-1 pt-4">
              {product[0].images.map((image) => (
                <div key={image} className="h-24 min-h-24 w-24 min-w-24">
                  <img
                    src={image}
                    className="h-full w-full cursor-pointer object-cover"
                    onClick={() => setActiveImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="text-center">
        <h1>We are sorry, but {name} can not be found ;( </h1>
      </div>
    );
  }
}
