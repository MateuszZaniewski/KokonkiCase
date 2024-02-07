import Delivery from "./Boxes/Delivery";
import Details from "./Boxes/Details";
import Info from "./Boxes/Info";
import Patterns from "./Boxes/Patterns";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export default function ProductInformation() {
  const { product, visiblePage, setVisiblePage } = useContext(AppContext);
  if (product && product.length > 0) {
    return (
      <div className="xl:pl-44 px-4 flex-col xl:max-w-[538px] md:w-[450px] lg:w-[600px] xl:w-auto mx-auto xl:mx-0 xl:pt-16 xl:pb-24 pb-14">
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
