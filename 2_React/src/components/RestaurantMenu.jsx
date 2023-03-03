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
        <h1>Menu List</h1>
        <ul>
          {Object.values(restaurantMenu?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
