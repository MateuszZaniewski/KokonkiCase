import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductPage from "./../pages/ProductPage";
import CheckoutPage from "./../pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
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
