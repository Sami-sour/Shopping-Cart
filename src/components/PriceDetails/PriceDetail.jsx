import React from "react";

function PriceDetail({ item }) {
  return (
    <>
      <div className="item-details">
        <div className="number-of-items">{item.title}</div>
        <div className="cost-item">${item.price}</div>
      </div>
    </>
  );
}

export default PriceDetail;
