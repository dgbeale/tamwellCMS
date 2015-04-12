'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	header = require('../../app/controllers/header.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/header')
		.get(header.read)
		.post(users.requiresLogin, header.create)
		.put(users.requiresLogin, header.hasAuthorization, header.update)

};
