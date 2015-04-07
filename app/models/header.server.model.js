'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var HeaderSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	caption: {
		type: String,
		default: '',
		trim: true
	},
	sliders: [
		{
			"image": string,
			"text": string,
			"desc": string
		}
	],
	subcategories: [schema.types.ObjectId],
	promotions: [
		{
			"text": String,
			"title": String,
			"image": String,
			"alt": String
		}
	]
});

mongoose.model('Article', ArticleSchema);
