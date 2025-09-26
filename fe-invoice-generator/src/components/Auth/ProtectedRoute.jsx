import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";

export default function ProtectedRoute({ children }) {
  // Will integrate these values later
  const isAuthenticated = true;
  const loading = false;

  if (loading) {
    // You can render a loading spinner here
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <DashboardLayout>{children ? children : <Outlet />}</DashboardLayout>
    </div>
  );
}
