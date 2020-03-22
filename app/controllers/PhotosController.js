var Image = require('../models/Image');

var photosController = {
	index: function(req, res) {
		var keyword = req.query.keyword;

		Image.search(keyword, function(err, images) {
			res.render('photos/index', {
				title: 'Photos',
				message: 'All Photos',
				image: images,
				isNoResults: images.length === 0,
			});
		});
	},

	show: function(req, res) {
		var single_image;
		var images = Image.findAll();
		for (var i = 0; i < images.length; i++)
		{
			if (images[i].id == req.params.id)
			{
				single_image = images[i];
				break;
			}
		}

		res.render('photos/show', {
			title: `Photos ${req.params.id}`,
			message: `Photo ${req.params.id}`,
			image: single_image,
		});
	}
};

module.exports = photosController;