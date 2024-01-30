import { useEffect, useState } from "react";

export default function ProductImages({ product }) {
  const [activeImage, setActiveImage] = useState(null);

  // Sets active first image from pool if theres none sets already
  useEffect(() => {
    if (product && product.length > 0 && product[0].images) {
      setActiveImage(product[0].images[0]);
    }
  }, [product]);

  if (product && product.length > 0 && product[0].images) {
    console.log(activeImage);
    return (
      <div className="flex gap-5 xl:min-w-[674px]">
        <div className="flex-col space-y-5">
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
    );
  } else {
    return <div>Loading...</div>;
  }
}
