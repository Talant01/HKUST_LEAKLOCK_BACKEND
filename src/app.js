const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/spotify', require('./routes/spotifyRoutes'));
app.use('/youtube', require('./routes/youtubeRoutes'));
app.use('/netflix', require('./routes/netflixRoutes'));

module.exports = app;
