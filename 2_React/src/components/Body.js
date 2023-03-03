import { RestaurentList } from "./constants";
import IMG_URL_CDN from "./constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
      <div className="restaurant-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwoString}</h4>
        <div className="rating-locality">
          <h4 className="restaurant-rating">{avgRating} ★</h4>
          <h4>{locality}</h4>
        </div>
      </div>
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
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  // const [restaurants, setRestaurants] = useState([RestaurentList]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
    //* Initial filtered reastaurants are all the restaurents
    setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
  }

  if (!allrestaurants) return null; //*Not rendered components(Early return)

  // if (filteredRestaurants?.length === 0)
  // return <h1>No restaurant found with your search</h1>;

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search_section">
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
            const data = filterData(searchText, allrestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurent-card-List">
        {filteredRestaurants.map((restaurent) => {
          {
            /* console.log(restaurent.data); */
          }
          {
            /* console.log(restaurent.data.id); */
          }
          return (
            <Link
              key={restaurent.data.id}
              to={"/restaurant/" + restaurent.data.id}
            >
              <RestaurentCard {...restaurent.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
