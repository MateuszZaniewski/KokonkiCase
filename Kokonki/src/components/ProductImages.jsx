export default function ProductImages({ product }) {
  if (product && product.length > 0 && product[0].images) {
    return (
      <div className="flex gap-5 xl:min-w-[674px]">
        <div className="flex-col space-y-5">
          {product[0].images.map((image) => (
            <img key={image} src={image} className="h-24 w-24" />
          ))}
        </div>
        <div>
          <img
            src={product[0].images[0]}
            className="xl:h-[558px] xl:w-[558px]"
          />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
