const express = require("express");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const authRoutes = require("./routes/authRoutes");

/**
 * Create and configure Express application
 * Separated from server.js for testability
 */
const app = express();

// ==================== Global Middleware ====================
app.use(cors());                 // Enable CORS for all origins
app.use(express.json());         // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ==================== Health Check ====================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚐 DiagnoVan API is running!",
    version: "1.0.0",
  });
});

// ==================== API Routes ====================
app.use("/api/auth", authRoutes);

// ==================== Error Handling ====================
app.use(notFound);     // 404 handler for undefined routes
app.use(errorHandler); // Global error handler

module.exports = app;
