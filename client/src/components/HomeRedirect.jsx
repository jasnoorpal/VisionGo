import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Landing from "../pages/Landing";

function HomeRedirect() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}

export default HomeRedirect;
