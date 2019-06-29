const express = require('express');
const api = express.Router();
const NodeArticlesService = require('../services/node_articles.service');
const service = new NodeArticlesService();

api.get('/', async (req, res, next) => {
	try {
		const response = await service.getAll();
		res.status(200).send(response);
	} catch (err) {
		next(err);
	}
});

api.delete('/:id', async (req, res, next) => {
	try {
		const id = req.params.id;
		await service.delete(id);
		res.status(204).send();
	} catch (err) {
		next(err);
	}
});

module.exports = api;