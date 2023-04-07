const Video = require('../models/Video');

exports.getVideos = async (req, res, next) => {
  try {
    const videos = await Video.find().populate('uploader', 'username');
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

exports.createVideo = async (req, res, next) => {
  try {
    const { title, description, url } = req.body;
    const video = new Video({
      title,
      description,
      url,
      uploader: req.user._id, // set the uploader to the currently logged in user
    });
    await video.save();
    res.status(201).json(video);
  } catch (err) {
    next(err);
  }
};
