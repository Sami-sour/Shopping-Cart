import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import Cart from "./components/Cart.jsx";
import ItemsMap from "./components/ItemsMap.jsx";
import HomePage from "./components/HomePage.jsx";
import CartStoreProvider from "./store/Item-store.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shopping", element: <ItemsMap /> },

      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartStoreProvider>
      <RouterProvider router={router} />
    </CartStoreProvider>
  </StrictMode>
);
