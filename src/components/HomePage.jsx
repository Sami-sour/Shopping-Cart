import React from "react";

const HomePage = () => {
  return (
    <div className="images">
      <div className="image-section">
        <img
          src="https://www.rollingstone.com/wp-content/uploads/2024/01/Best-Sites-for-Womenswear-15-Gap-1.jpg?w=1581&h=1054&crop=1"
          alt="image"
          className="items"
        />
      </div>

      <div className="image-section">
        <img
          src="https://images.pexels.com/photos/14438772/pexels-photo-14438772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          className="items"
        />
      </div>

      <div className="info-website">
        <h1 className="heading1">Your Cart, Your Style</h1>
      </div>
    </div>
  );
};

export default HomePage;
