import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div className="title">
      <a href="/">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191005/ourmid/pngtree-barbecue-fire-fork-spatula-logo-template-vector-badge-design-image_314297.jpg"
          alt="logo"
        />
      </a>
    </div>
  );
};
// const NavItems = () => {
//   return (

//   );
// };
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const { user } = useContext(UserContext);
  // console.log(user);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cooking">Cooking</Link>
          </li>
          <li>
            <Link to="/cart">Cart- {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <button className="login-btn" onClick={handleButtonClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
export default Header;
