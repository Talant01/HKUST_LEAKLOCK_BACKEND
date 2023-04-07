const express = require('express');
const Web3 = require('web3');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');

const router = express.Router();
const web3 = new Web3(config.ETHEREUM_NODE_URL);

// Register a new user
router.post('/register', async (req, res) => {
  const { address, privateKey } = web3.eth.accounts.create();
  const user = new User({ ethereumAddress: address });
  try {
    await user.save();
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ token, ethereumAddress: address, privateKey });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router;
