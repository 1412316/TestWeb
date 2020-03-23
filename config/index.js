// Không có biến app => viết hàm chèn vào
module.exports = function(app)
{
	require('dotenv').config();
	require('./middlewares')(app);
	require('./views')(app);
	require('./routes')(app);
};