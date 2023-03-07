import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      <h2>Made with love by Jabeed</h2>
      <p>© Copyright, {user.name}</p>
      <p>{user.mail}</p>
    </div>
  );
};
export default Footer;
