import { createContext } from "react";

const StoreValue = {
  deleteCart: () => {},
  addToCart: () => {},
  products: [],
  searchPost: () => {},
};

export const CartStoreItems = createContext(StoreValue);
