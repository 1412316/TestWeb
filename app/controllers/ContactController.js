var Message = require('../models/Message');

var isNotEmpty = function(string) {
	return string && string.trim() !== "" && string.length !== 0;
}

var contactController =  {
	index: function(req, res) {
		res.render('contact/index', {
			title: 'Contact',
			message: 'Hello, what do you want?',
		});
	},

	create: function(req, res) {
		console.log(req.body);
	
		var name = req.body.name;  // chỉ áp dụng cho việc điền vào form name

		if (isNotEmpty(name))
		{
			Message.create({
				name: req.body.name,
				email: req.body.email,
				message: req.body.message
			}, function(err) {
				if (err)
				{
					res.render('contact/index', {
						title: 'Contact',
						message: 'Hello, what do you want?',
						detailMessage: {
							error: 'Your field cannot be empty'
						}
					});
					
				}
				else
				{
					res.render('shared/messages', { // dùng chung để ngoài
						title: 'Contact',
						message: 'Hello, what do you want?',
						detailMessage: {
							success: 'Your message is sent. We will contact to you soon.'
						}
					});
				}
			})
		} 
		else 
		{
			res.render('contact/index', {
				title: 'Contact',
				message: 'Hello, what do you want?',
				detailMessage: {
					error: 'Your field cannot be empty'
				}
			});
		}
	}
};

module.exports = contactController;