const jwt = require("jsonwebtoken");

/**
 * Generate a JWT token for a given user ID
 * Token expires in 30 days by default
 *
 * @param {string} id - The user's MongoDB _id
 * @returns {string} Signed JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
