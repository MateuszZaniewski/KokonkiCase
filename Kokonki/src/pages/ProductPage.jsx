import { useParams } from "react-router-dom";
export default function ProductPage() {
  const { productId } = useParams();
  console.log(productId);
  return <div>This is a product page for product {productId}</div>;
}
