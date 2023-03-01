import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const params = useParams();
//   console.log(params);
  return (
    <div>
      <h1>Restaurant id:{params.id}</h1>
      <h2>Hotel Empire</h2>
    </div>
  );
};
export default RestaurantMenu;
