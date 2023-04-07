const express = require('express');
const { authorizeSpotify, handleSpotifyCallback } = require('../controllers/spotifyController');

const router = express.Router();

router.get('/spotify/authorize', authorizeSpotify);
router.get('/spotify/callback', handleSpotifyCallback);

module.exports = router;
