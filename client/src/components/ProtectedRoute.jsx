import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div>Checking auth...</div>;

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
