var Router = require('express').Router;

// controller
var controller = require('../app/controllers');

// route
module.exports = function(app) {
	var homeRoutes = Router()
		.get('/', controller.home.index);

	var albumsRoutes = Router()
		.get('/', controller.albums.index);

	var photosRoutes = Router()
		.get('/', controller.photos.index)
		.get('/:id', controller.photos.show);

	// nếu muốn albums/photos
	//albumsRoutes.use('/photos', photosRoutes);

	var aboutRoutes = Router()
		.get('/', controller.about.index);

	var contactRoutes = Router()
		.get('/', controller.contact.index)
		.post('/', controller.contact.create);

	app.use('/', homeRoutes);
	app.use('/albums', albumsRoutes);
	app.use('/photos', photosRoutes);
	app.use('/about', aboutRoutes);
	app.use('/contact', contactRoutes);
};