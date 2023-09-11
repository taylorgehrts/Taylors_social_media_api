const { User } = require('../models'); // Import the User model

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getUserById: async (req, res) => {
    try {
      const users = await User.findOne({_id: req.params.userId});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Implement next user-related route handlers here
};

module.exports = userController;
