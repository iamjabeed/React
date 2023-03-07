import React from "react";
import IMG_URL_CDN from "./constants";

const FoodItems = ({ category, cloudinaryImageId, price, name }) => {
  return (
    <div className="cart-items">
      <img src={IMG_URL_CDN + cloudinaryImageId} alt={name} />
      <h1 className="food-name">{name}</h1>
      <h1>{category}</h1>
      <h1>{price / 100}</h1>
    </div>
  );
};

export default FoodItems;
