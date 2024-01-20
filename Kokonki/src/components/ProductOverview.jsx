import ProductImages from "./ProductImages";
import ProductVariants from "./ProductVariants";

export default function ProductOverview() {
  const colors = [
    "#EFEAE5",
    "#E1DAD9",
    "#F4EDDE",
    "#C1BBB5",
    "#282524",
    "#97715B",
    "#DDBEA0",
    "#E4C162",
    "#DB9339",
    "#F5743E",
    "EF326F",
    "#C87478",
    "#F5CCD0",
    "#886C85",
    "#424967",
    "#7C7E9A",
    "#AEB5D5",
    "#BCC0C9",
    "#9EC8C7",
    "#63A3C0",
    "#868E40",
    "#466950",
  ];
  return (
    <div className="flex pt-28 px-14 gap-24">
      <ProductImages />
      <ProductVariants />
    </div>
  );
}
