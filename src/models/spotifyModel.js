const mongoose = require('mongoose');

const spotifySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

const Spotify = mongoose.model('Spotify', spotifySchema);

module.exports = Spotify;
