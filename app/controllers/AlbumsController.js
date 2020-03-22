var Image = require('../models/Image');

var albumsController = {
	index: function(req, res) {
		Image.findAll(function(err, images) {
			res.render('albums/index', {
				title: 'HBS Albums Page',
				message: 'My Albums',
				image: images,
			});
		});
	}
};

module.exports = albumsController;