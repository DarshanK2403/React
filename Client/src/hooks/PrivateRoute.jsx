import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const [auth, setAuth] = useState(null); // Start with null to handle loading state

  useEffect(() => {
    const id = localStorage.getItem("id");
    setAuth(!!id); // Set to true if `id` exists, otherwise false
  }, []);

  return auth;
};

const PrivateRoute = () => {
  const auth = useAuth();

  if (auth === null) {
    return <div>Loading...</div>; // Prevents flashing incorrect UI while checking auth
  }

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
