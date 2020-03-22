var pg = require('pg');

var config = require('../../config/database.js')

var pool = new pg.Pool(config);

module.exports = pool;