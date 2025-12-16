import React, { useContext } from "react";
import PriceDetail from "./PriceDetail";
import { CartStoreItems } from "../../store/CartStoreContext";
import TotalPriceAmount from "./TotalPriceAmount";

const MapPrice = () => {
  const { priceDetails } = useContext(CartStoreItems);

  return (
    <div className="price-section">
      {priceDetails.length > 0 && (
        <h4 className="heading-price">Price Details</h4>
      )}

      {priceDetails.map((item) => (
        <PriceDetail item={item} key={item.id} />
      ))}

      {priceDetails.length > 0 && <TotalPriceAmount />}
    </div>
  );
};

export default MapPrice;
