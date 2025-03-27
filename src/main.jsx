import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/responsive.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./components/Cart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "store", element: <Store /> },
      {
        path: "product-details/:title",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
