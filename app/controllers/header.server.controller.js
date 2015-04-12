'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	header = mongoose.model('Header'),
	_ = require('lodash');

/**
 * Create a header
 */
exports.create = function(req, res) {
	var header = new header(req.body);
	header.user = req.user;

	header.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(header);
		}
	});
};

/**
 * Show the current header
 */
exports.read = function(req, res) {
	res.json(req.header);
};

/**
 * Update a header
 */
exports.update = function(req, res) {
	var header = req.header;

	header = _.extend(header, req.body);

	header.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(header);
		}
	});
};

/**
 * Delete an header
 */
exports.delete = function(req, res) {
	var header = req.header;

	header.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(header);
		}
	});
};

/**
 * List of headers
 */
exports.list = function(req, res) {
	header.findOne().exec(function(err, header) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(header);
		}
	});
};


/**
 * header authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.header.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
