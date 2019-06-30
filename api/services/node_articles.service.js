const NodeArticles = require('../models/node_articles');

class NodeArticlesService {
	constructor() {}
    
	async getAll() {
		try {
			const docs = await NodeArticles.model.find({
				'deleted_at': null
			}).sort({
				'created_at': -1
			}).lean().exec();
			return {
				'total': docs.length,
				'items': docs
			};
		} catch (err) {
			throw err;
		}
	}
    
	/**
     * 
     * @param {string} id 
     */
	async delete(id) {
		try {
			await NodeArticles.model.findByIdAndUpdate(id, {
				'$set': {
					'deleted_at': new Date()
				}
			}).lean().exec();
		} catch (err) {
			throw err;
		}
	}
}

module.exports = NodeArticlesService;