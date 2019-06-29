'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	author: mongoose.Schema.Types.String,
	title: mongoose.Schema.Types.String,
	story_title: mongoose.Schema.Types.String,
	url: mongoose.Schema.Types.String,
	story_url: mongoose.Schema.Types.String,
	created_at: mongoose.Schema.Types.Date,
	deleted_at: mongoose.Schema.Types.Date,
	objectID: mongoose.Schema.Types.String,
},{
	collection: 'node_articles'
});

module.exports = {
	model: mongoose.model('NodeArticles', schema),
	schema: schema
};