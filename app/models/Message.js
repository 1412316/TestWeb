var db = require('./db');

var Message = {
	create: function(message, callback) {
		db.query('insert into messages(name, email, message) values($1, $2, $3)',
					[message.name, message.email, message.message], 
					function(err, result) {
						callback(err);
					});
	}
};

module.exports = Message;