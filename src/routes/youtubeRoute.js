const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/videos', youtubeController.getVideos);
router.post('/videos', authMiddleware, youtubeController.createVideo);

module.exports = router;
