const express = require("express");
const router = express.Router();
const {
  sendOTP,
  verifyOTP,
  adminLogin,
  registerClinic,
  requestPasswordReset,
  verifyResetToken,
  resetPassword,
} = require("../controllers/authController");

// ==================== Public Authentication Routes ====================

// 1. Send OTP to mobile number
router.post("/send-otp", sendOTP);

// 2. Verify OTP (Logs in or Registers the user automatically)
router.post("/verify-otp", verifyOTP);

// 3. Admin Login with ID/Email and Password
router.post("/admin/login", adminLogin);

// 4. Register Clinic/Van Owner
router.post("/register", registerClinic);

// ==================== Admin Password Reset Routes ====================

// 5. Request password reset (sends email)
router.post("/admin/request-reset", requestPasswordReset);

// 6. Verify reset token validity
router.post("/admin/verify-token", verifyResetToken);

// 7. Reset password with token
router.post("/admin/reset-password", resetPassword);

module.exports = router;
