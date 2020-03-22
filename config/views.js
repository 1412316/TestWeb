var exphbs  = require('express-handlebars');
var path = require('path'); // chuyen duong link tuong doi sang tuyet doi

var helper = require('../app/helpers')

// Static asset: folder public
module.exports = function(app) {
	app.engine('hbs', exphbs({
		extname: '.hbs',
		defaultLayout: 'application',
		layoutsDir: path.resolve('app/views/layouts'),
		partialsDir: path.resolve('app/views/partials'),
		helpers: helper
	}));
	app.set('view engine', 'hbs');

	// view: duong dan toi thu muc views
	app.set('views', path.resolve('app/views'));
};