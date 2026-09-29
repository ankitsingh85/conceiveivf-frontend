import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AdminLoader from "./AdminLoader";

export default function ProtectedRoute() {
  const { admin, loading } = useAuth();
  const location = useLocation();

  if (loading) return <AdminLoader />;

  if (!admin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}
