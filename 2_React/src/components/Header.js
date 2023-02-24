const Title = () => {
  return (
    <div className="title">
      <a href="/">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/006/735/689/original/vintage-grilled-barbecue-logo-retro-bbq-fire-grill-food-and-restaurant-icon-red-fire-icon-free-vector.jpg"
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
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <NavItems />
    </div>
  );
};
export default Header;
