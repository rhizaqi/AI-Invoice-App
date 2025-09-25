import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // Will integrate these
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
      <div>ProtectedRoute</div>
    </div>
  );
}
