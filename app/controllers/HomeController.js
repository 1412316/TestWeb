var homeController = {
	index: function(req, res) {
		res.render('home/index', {
			title: 'HBS Index Page',
			message: 'Hello HBS Page',
			page: 'index',
			toUpperCase: function(value) {
				return value && value.toUpperCase && value.toUpperCase();
			}
		})
	}
};

module.exports = homeController;