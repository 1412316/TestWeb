var express = require('express');
var app = express();

require('./config')(app);

//star server
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`);
});