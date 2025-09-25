import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import InvoiceDetail from "./pages/Invoice/InvoiceDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import AllInvoice from "./pages/Invoice/AllInvoice";
import CreateInvoice from "./pages/Invoice/CreateInvoice";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="invoices" element={<AllInvoice />} />
            <Route path="invoices/new" element={<CreateInvoice />} />
            <Route path="invoices/:id" element={<InvoiceDetail />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Call all Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}
