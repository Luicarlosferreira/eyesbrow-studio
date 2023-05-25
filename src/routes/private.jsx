import { Navigate } from "react-router-dom";
const PrivateRoutes = ({ Component }) => {
  const session_token = JSON.parse(localStorage.getItem("token"));

  return session_token?.token ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoutes;
