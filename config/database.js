module.exports = {
	user: process.env.DB_USER,
	database: process.env.DB,
	password: process.env.DB_PWD,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	max: process.env.DB_MAXPOOL,
	min: process.env.DB_MINPOOL,
	idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT,
};