const User = require("../models/User");

/**
 * Auth Service
 * Encapsulates database operations for the User model.
 * Controllers call these service methods for cleaner separation of concerns.
 * Expand this file as the app grows (OTP, bookings, etc.)
 */

/**
 * Find a user by email
 * @param {string} email
 * @returns {Promise<Object|null>}
 */
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

/**
 * Find a user by ID
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
const findUserById = async (id) => {
  return await User.findById(id);
};

/**
 * Create a new user
 * @param {Object} userData - { name, email, password, role }
 * @returns {Promise<Object>}
 */
const createUser = async (userData) => {
  return await User.create(userData);
};

/**
 * Get all users (without passwords)
 * @returns {Promise<Array>}
 */
const getAllUsers = async () => {
  return await User.find({}).select("-password");
};

/**
 * Delete a user by ID
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
const deleteUserById = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  getAllUsers,
  deleteUserById,
};
