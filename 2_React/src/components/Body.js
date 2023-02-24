import { RestaurentList } from "./constants";
import IMG_URL_CDN from "./constants";
import { useState } from "react";
const RestaurentCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  avgRating,
  locality,
}) => {
  return (
    <div className="restaurent-card">
      <img src={IMG_URL_CDN + cloudinaryImageId} alt="food-image" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoString}</h4>
      <div className="rating-locality">
        <h4>{avgRating} ★</h4>
        <h4>{locality}</h4>
      </div>
      <hr />
    </div>
  );
};

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RestaurentList);

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search a restaurant you want..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          // filter the data
          const data = filterData(searchText, restaurants);
          // update the state of restaurants list
          setRestaurants(data);
        }}
      >
        Search
      </button>

      <div className="restaurent-card-List">
        {restaurants.map((restaurent) => {
          return (
            <RestaurentCard key={restaurent.data.id} {...restaurent.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
