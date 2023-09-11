const { User } = require('../models'); // Import the User model

const userController = {
  //get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //get user by id
  getUserById: async (req, res) => {
    try {
      const users = await User.findOne({_id: req.params.userId});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //create user
  createUser: async(req, res) => {
    try {
      const users = await User.create(req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
    
  },
  //update user
  updateUser: async (req, res) => {
    try {
      const users = await User.findOneAndUpdate(
        {_id: req.params.userId},
        { $set: req.body },
        { runValidators: true, new: true }
        );
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // Implement next user-related route handlers here
};

module.exports = userController;
