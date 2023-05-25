import { useContext } from "react";
import { AuthContext } from "../context/auth";

const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("There's any error in the context. Check it, please!");
    return;
  }

  return context;
};

export default UseAuth;
