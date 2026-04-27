import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./pages/LoginPage";
import OtpVerification from "./pages/OtpVerification";
import AdminLogin from "./pages/AdminLogin";
import UserDashboard from "./pages/UserDashboard";
import BookService from "./pages/BookService";
import UserProfile from "./pages/UserProfile";
import BookingConfirmation from "./pages/BookingConfirmation";
import ForgotPassword from "./pages/ForgotPassword";
import TrackingInfo from "./pages/TrackingInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/book-service" element={<BookService />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tracking" element={<TrackingInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
