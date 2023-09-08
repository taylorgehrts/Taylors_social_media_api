require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; // Get the MongoDB URI from the environment variables

// Connect to MongoDB using the URI from the .env file
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Handle connection events
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export the MongoDB connection
module.exports = db;
