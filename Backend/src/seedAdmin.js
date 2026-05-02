const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const dotenv = require("dotenv");
const path = require("path");

// Load env
dotenv.config({ path: path.join(__dirname, "../.env") });

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const email = "krishnaprajapati@gmail.com";
    const password = "Krishna@123";

    // Check if exists
    const existing = await Admin.findOne({ email });
    if (existing) {
      console.log("Admin already exists!");
      process.exit(0);
    }

    await Admin.create({ email, password, role: "admin" });
    console.log(`✅ Admin created successfully!`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedAdmin();
