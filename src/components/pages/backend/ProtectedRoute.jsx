import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  const isEligible = sessionStorage.getItem("isEligible") === "true";

  return isEligible ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
