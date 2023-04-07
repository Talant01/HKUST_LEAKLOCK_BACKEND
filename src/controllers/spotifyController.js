const SpotifyWebApi = require('spotify-web-api-node');
const Spotify = require('../models/spotifyModel');

// Initialize a new Spotify Web API instance
const spotifyApi = new SpotifyWebApi({
  clientId: '<your Spotify client ID here>',
  clientSecret: '<your Spotify client secret here>',
});

async function authorizeSpotify(req, res) {
  const { userId } = req.body;

  // Redirect the user to the Spotify authorization URL
  const scopes = ['user-read-private', 'user-read-email', 'user-library-read'];
  const redirectUri = '<your app redirect URI here>';
  const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, null, redirectUri);

  res.redirect(authorizeUrl);
}

async function handleSpotifyCallback(req, res) {
  const { userId } = req.body;
  const { code } = req.query;

  // Exchange the authorization code for an access token and refresh token
  const redirectUri = '<your app redirect URI here>';
  const data = await spotifyApi.authorizationCodeGrant(code, redirectUri);

  // Save the tokens to the database
  const spotify = new Spotify({
    userId,
    accessToken: data.body.access_token,
    refreshToken: data.body.refresh_token,
  });
  await spotify.save();

  res.json({ message: 'Authorization successful' });
}

module.exports = { authorizeSpotify, handleSpotifyCallback };
