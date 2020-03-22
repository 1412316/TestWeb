var db = require('./db');

var Image = {
	findAll: function(callback) {
		db.query("select id, name, url from photos", [], function(err, result) {
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},

	search: function(keyword, callback) {
		//db.query("select id, name , url from photos where name like '%" + keyword + "%'", 
		//			[], 
		//			function(err, result) { 
		// de bi loi sql injection vi cong chuoi
		//cach 1: db.query("select id, name , url from photos where name like $1", 
		//					['%' + keyword + '%'], 
		//					function(err, result) {
		db.query("select id, name , url from photos where name like '%' || $1 || '%'", 
					[keyword], 
					function(err, result) {
			console.log(err);
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
};

module.exports = Image;