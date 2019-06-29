/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app');

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('NodeJS Articles', () => {
	describe('GET /api/articles/node', () => {
		it('should get last nodejs articles', (done) => {
			chai.request(app)
				.get('/api/articles/node')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					done();
				});
		});
	});
});