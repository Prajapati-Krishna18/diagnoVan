const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Admin = require("../models/Admin");
const Clinic = require("../models/Clinic");
const generateToken = require("../utils/generateToken");
const { sendResetEmail } = require("../config/nodemailer");

// Demo OTP constant (No external SMS service required)
const DEMO_OTP = "123456";

// ============================================================
// @desc    Send OTP to mobile number
// @route   POST /api/auth/send-otp
// @access  Public
// ============================================================
const sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      res.status(400);
      return res.json({ success: false, message: "Phone number is required" });
    }

    // In a real app, you would integrate Twilio here and generate a random OTP
    // For demo purposes, we return a success message and mock OTP
    res.json({
      success: true,
      message: `OTP sent successfully to ${phone}`,
      demoOTP: DEMO_OTP, // Included for easy frontend testing
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Verify OTP & Login/Register User
// @route   POST /api/auth/verify-otp
// @access  Public
// ============================================================
const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      res.status(400);
      return res.json({ success: false, message: "Phone and OTP are required" });
    }

    // Manual OTP Verification logic
    if (otp !== DEMO_OTP) {
      res.status(401);
      return res.json({ success: false, message: "Invalid OTP" });
    }

    // Find user by phone, or create if they don't exist
    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({ phone, role: "user" });
    }

    res.json({
      success: true,
      message: "Authentication successful",
      data: {
        _id: user._id,
        phone: user.phone,
        role: user.role,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Login Admin
// @route   POST /api/auth/admin-login
// @access  Public
// ============================================================
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      return res.json({ success: false, message: "Admin ID/Email and password required" });
    }

    // For absolute simplicity in demo mode, you can hardcode an admin bypass here:
    // if (email === "admin" && password === "admin123") {
    //   return res.json({ success: true, data: { email: "admin", role: "admin", token: generateToken("admin_bypass_id") } });
    // }

    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.matchPassword(password))) {
      res.status(401);
      return res.json({ success: false, message: "Invalid admin credentials" });
    }

    res.json({
      success: true,
      message: "Admin login successful",
      data: {
        _id: admin._id,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Register a new Clinic / Van Owner
// @route   POST /api/auth/register
// @access  Public
// ============================================================
const registerClinic = async (req, res) => {
  try {
    const { name, roleTitle, email, phone, password, clinicName, region } = req.body;

    if (!name || !email || !phone || !password || !clinicName || !region) {
      res.status(400);
      return res.json({ success: false, message: "Please fill all required fields" });
    }

    const clinicExists = await Clinic.findOne({ email });

    if (clinicExists) {
      res.status(400);
      return res.json({ success: false, message: "Clinic email already registered" });
    }

    const clinic = await Clinic.create({
      name,
      roleTitle,
      email,
      phone,
      password,
      clinicName,
      region,
    });

    if (clinic) {
      res.status(201).json({
        success: true,
        message: "Clinic registered successfully",
        data: {
          _id: clinic._id,
          name: clinic.name,
          email: clinic.email,
          role: clinic.role,
          token: generateToken(clinic._id),
        },
      });
    } else {
      res.status(400);
      return res.json({ success: false, message: "Invalid clinic data" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Request password reset (sends email with token link)
// @route   POST /api/auth/admin/request-reset
// @access  Public
// ============================================================
const requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log(`Password reset requested for non-existent admin: ${email}`);
      // Return generic message to prevent email enumeration
      return res.json({
        success: true,
        message: "If this email exists, a reset link has been sent",
      });
    }

    console.log(`Generating reset token for admin: ${email}`);

    // Generate a secure random token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash the token before storing (so a DB leak doesn't expose valid tokens)
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Save hashed token + expiry (15 minutes) to admin document
    admin.resetToken = hashedToken;
    admin.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes
    await admin.save();

    // Build reset link with the PLAINTEXT token (user sends it back, we hash & compare)
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

    // Send email
    await sendResetEmail(admin.email, resetLink);

    res.json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Verify if a reset token is still valid
// @route   POST /api/auth/admin/verify-token
// @access  Public
// ============================================================
const verifyResetToken = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token is required" });
    }

    // Hash the incoming token to match stored hash
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const admin = await Admin.findOne({
      resetToken: hashedToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    res.json({
      success: true,
      message: "Token is valid",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ============================================================
// @desc    Reset password using valid token
// @route   POST /api/auth/admin/reset-password
// @access  Public
// ============================================================
const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Token and new password are required" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ success: false, message: "Password must be at least 6 characters" });
    }

    // Hash incoming token to compare with stored hash
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const admin = await Admin.findOne({
      resetToken: hashedToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!admin) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or expired token" });
    }

    // Update password (pre-save hook in Admin model will hash it)
    admin.password = newPassword;

    // Invalidate the token (one-time use)
    admin.resetToken = null;
    admin.resetTokenExpiry = null;

    await admin.save();

    res.json({
      success: true,
      message: "Password has been reset successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
  adminLogin,
  registerClinic,
  requestPasswordReset,
  verifyResetToken,
  resetPassword,
};
