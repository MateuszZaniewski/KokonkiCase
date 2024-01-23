import Delivery from "./Boxes/Delivery";
import Details from "./Boxes/Details";
import Info from "./Boxes/Info";
import Patterns from "./Boxes/Patterns";

export default function ProductInformation({
  product,
  visiblePage,
  setVisiblePage,
}) {
  if (product && product.length > 0) {
    return (
      <div className="pl-44 flex-col xl:max-w-[538px] xl:pt-16 xl:pb-24">
        <Info
          visiblePage={visiblePage}
          setVisiblePage={setVisiblePage}
          product={product}
        />
        <Details
          visiblePage={visiblePage}
          setVisiblePage={setVisiblePage}
          product={product}
        />
        <Delivery visiblePage={visiblePage} setVisiblePage={setVisiblePage} />
        <Patterns
          visiblePage={visiblePage}
          setVisiblePage={setVisiblePage}
          product={product}
        />
      </div>
    );
  }
}
