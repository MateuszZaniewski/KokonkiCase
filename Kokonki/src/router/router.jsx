import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import CheckoutPage from "./../pages/CheckoutPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

export default router;
