import { useAuthStore, isLoggedInSelector } from "modules/Authorization";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useAuthStore(isLoggedInSelector);
  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
};

export { PrivateRoute };
