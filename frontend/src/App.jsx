import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Public Pages
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp.jsx";
import Login from "./pages/Auth/Login.jsx";
// Protected Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import AllInvoices from "./pages/Invoices/AllInvoices.jsx";
import CreateInvoice from "./pages/Invoices/CreateInvoice.jsx";
import InvoiceDetail from "./pages/Invoices/InvoiceDetail.jsx";
import ProfilePage from "./pages/Profile/ProfilePage";

// Protected Route Wrapper
import ProtectedRoute from "./components/auth/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="invoices" element={<AllInvoices />} />
            <Route path="invoices/new" element={<CreateInvoice />} />
            <Route path="invoices/:id" element={<InvoiceDetail />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Catch all */}
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
};

export default App;