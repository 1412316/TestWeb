var pg = require('pg');

var parse = require('pg-connection-string').parse;

var config = require('../../config/database.js');

var pool = new pg.Pool(config);

module.exports = pool;