const NodeArticles = require('../models/node_articles');
const axios = require('axios');

const run = async () => {
	try {
		const url = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
		const response = await axios.default.get(url);
		if(response.status === 200) {
			if(response.data.hits.length > 0) {
				const bulk = NodeArticles.model.collection.initializeOrderedBulkOp();
				response.data.hits.forEach(d => {
					const doc = {
						'title': d.title,
						'story_title': d.story_title,
						'created_at': d.created_at,
						'author': d.author,
						'url': d.url,
						'story_url': d.story_url,
						'objectID': d.objectID
					};
                    
					bulk.find({'objectID': d.objectID}).upsert().updateOne({
						'$set': doc
					});
				});
                
				await bulk.execute();
			}
		}
	} catch (err) {
		console.log(err);
	}	
};

const task = async () => {
	await run();
	setInterval(run, 3600000);
};

module.exports = task;