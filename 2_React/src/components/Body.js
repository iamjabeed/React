import { RestaurentList } from "./constants";
import IMG_URL_CDN from "./constants";
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

const Body = () => {
  return (
    <div className="restaurent-card-List">
      {RestaurentList.map((restaurent) => {
        return <RestaurentCard key={restaurent.data.id} {...restaurent.data} />;
      })}
    </div>
  );
};
export default Body;
