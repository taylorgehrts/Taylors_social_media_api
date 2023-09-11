//seed data here
const mongoose = require('mongoose');
const { User, Thought } = require('../models');

// Define your sample data
const sampleUsers = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
  },
  {
    username: 'user4',
    email: 'user4@example.com',
  },
  {
    username: 'user5',
    email: 'user5@example.com',
  },
];

const sampleThoughts = [
  {
    thoughtText: 'Thought 1 by user 1',
    username: 'user1',
  },
  {
    thoughtText: 'Thought 2 by user 1',
    username: 'user1',
  },
  {
    thoughtText: 'Thought 1 by user 2',
    username: 'user2',
  },
  {
    thoughtText: 'Thought 1 by user 3',
    username: 'user3',
  },
  {
    thoughtText: 'Thought 1 by user 4',
    username: 'user4',
  },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mysocialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create sample users
    const users = await User.insertMany(sampleUsers);

    // Add thoughts to users
    const thoughtsWithUsers = sampleThoughts.map((thought) => {
      const user = users.find((user) => user.username === thought.username);
      thought.username = user._id;
      return thought;
    });

    // Create sample thoughts
    await Thought.insertMany(thoughtsWithUsers);

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Seed the database
seedDatabase();
