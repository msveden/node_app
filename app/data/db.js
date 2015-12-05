var mongojs = require('mongojs');
var config = require('../../config/db');

console.log(config.connectionString);

var db = mongojs(config.connectionString, config.collections);

module.exports = function() {
	return db;
};

module.exports.ObjectId = function(id) {
    return mongojs.ObjectId(id);
}