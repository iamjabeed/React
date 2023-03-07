import { createContext } from "react";
const UserContext = createContext({
  user: {
    name: "dummy",
    mail: "dummy@mail.com",
  },
});
export default UserContext;
