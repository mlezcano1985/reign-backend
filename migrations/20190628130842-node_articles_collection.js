module.exports = {
	async up(db) {
		db.createCollection('node_articles');
	},

	async down(db) {
		db.collection('node_articles').drop();
	}
};
