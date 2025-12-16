import React, { useContext } from "react";
import Shopping from "./Shopping";
import { CartStoreItems } from "../store/CartStoreContext";

const ItemsMap = () => {
  const { products } = useContext(CartStoreItems);

  return (
    <>
      {products.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className="main-card">
          {products.map((item) => (
            <Shopping item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemsMap;
