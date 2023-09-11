const { User } = require("../models"); // Import the User model

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
      const users = await User.findOne({ _id: req.params.userId });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  //create user
  createUser: async (req, res) => {
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
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const users = await User.findOneAndDelete({ _id: req.params.userId });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // Add friend to user
  addFriend: async (req, res) => {
    try {
      // Assuming you want to add a friend by their userId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Remove friend from user (You can implement this similarly)
  removeFriend: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Implement next user-related route handlers here
};

module.exports = userController;
