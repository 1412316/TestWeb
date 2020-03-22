var aboutController =  {
	index: function(req, res) {
		res.render('about/index', {
			title: 'HBS About Page',
			message: 'This is about page',
		});
	}
};

module.exports = aboutController;