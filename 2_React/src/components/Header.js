import { useState } from "react";
import { Link } from "react-router-dom";

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
const NavItems = () => {
  return (
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
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="header">
      <Title />
      <NavItems />
      <div className="login">
        <button className="login-btn" onClick={handleButtonClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
export default Header;
