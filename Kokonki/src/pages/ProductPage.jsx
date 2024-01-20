import { useParams } from "react-router-dom";
export default function ProductPage() {
  const { id } = useParams();
  console.log(id);
  return <div>This is a product page for product {id}</div>;
}
