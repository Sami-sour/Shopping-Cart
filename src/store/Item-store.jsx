import { useEffect, useState } from "react";
import { CartStoreItems } from "./CartStoreContext";

const DEFAULT_VALUE = [];

const CartStoreProvider = ({ children }) => {
  const [cart, setCart] = useState(DEFAULT_VALUE);
  const [products, setProducts] = useState([]);
  const [priceDetails, setPriceDEtails] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const deleteCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    setPriceDEtails((prev) => prev.filter((item) => item.id !== id));
  };

  const AddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setPriceDEtails((prev) => [...prev, item]);
  };

  const searchCart = () => {};

  return (
    <>
      <CartStoreItems.Provider
        value={{
          products,
          cart,
          priceDetails,
          deleteCart,
          AddToCart,
          searchCart,
        }}
      >
        {children}
      </CartStoreItems.Provider>
    </>
  );
};

export default CartStoreProvider;
