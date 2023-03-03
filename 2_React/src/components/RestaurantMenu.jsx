import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IMG_URL_CDN from "./constants";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const params = useParams();
  // console.log(params);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  async function getMenuInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId=" +
        params.id
    );
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json.data);
  }
  useEffect(() => {
    getMenuInfo();
  }, []);

  if (!restaurantMenu) return <Shimmer />;
  return (
    <div className="Restaurant-menu-container">
      <div className="menu-header">
        <div>
          <h1>{restaurantMenu?.name}</h1>
          <p>{restaurantMenu?.cuisines.join(",")}</p>
          <h4>{restaurantMenu?.area}</h4>
          <h4>{restaurantMenu?.city}</h4>
        </div>
        <div>
          <img
            src={IMG_URL_CDN + restaurantMenu?.cloudinaryImageId}
            alt={restaurantMenu?.name}
          />
        </div>
      </div>
      <div className="menu-list-items">
        <h1>Full Menu List</h1>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <div className="menu-items" key={item.id}>
              <div className="description">
                <li className="food-name">{item.name}</li>
                <li>₹{item.price} in PAISE</li>
                <li>{item.category}</li>
              </div>
              <div className="right-section-add-btn">
                <img
                  src={IMG_URL_CDN + item?.cloudinaryImageId}
                  alt="food_img"
                />
                <button>Add</button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
