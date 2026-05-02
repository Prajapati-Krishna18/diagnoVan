const dotenv = require("dotenv");

const path = require("path");

// Load environment variables FIRST (before any other imports that use them)
dotenv.config({ path: path.join(__dirname, "../.env") });

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

/**
 * Start the server
 * 1. Connect to MongoDB
 * 2. Start Express on the configured port
 */
const startServer = async () => {
  // Connect to database
  await connectDB();

  // Start listening
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
    console.log(`📍 API:  http://localhost:${PORT}/api/auth\n`);
  });
};

startServer();
