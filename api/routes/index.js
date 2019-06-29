const nodeArticlesRouter = require('./node_articles.route');

const api = (app) => {
	const baseUrl = '/api';
	app.use(`${baseUrl}/articles/node`, nodeArticlesRouter);
};

module.exports = api;