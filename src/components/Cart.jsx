import React, { useContext } from "react";
import CartLayout from "./CartAddValue/CartLayout";
import { CartStoreItems } from "../store/CartStoreContext";
import MapPrice from "./PriceDetails/MapPrice";

const Cart = () => {
  const { cart } = useContext(CartStoreItems);
  return (
    <>
      <h1 className="cart-heading">Your Order Summary</h1>

      {cart.length === 0 && (
        <div className="text-message">No Item is added to Cart</div>
      )}
      <div className="cart-section">
        <div className="items-layout">
          {cart.map((item) => (
            <CartLayout key={item.id} item={item} />
          ))}
        </div>

        <MapPrice />
      </div>
    </>
  );
};

export default Cart;
