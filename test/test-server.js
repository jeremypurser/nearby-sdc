let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();



chai.use(chaiHttp);

describe('/GET nearby houses of a specific id', () => {
    it('it should GET all the nearby houses in an array', (done) => {
    chai.request(server)
        .get('/house/2')
        .end((err, res) => {
                res.body.should.be.a('array');
            done();
        });
    });
    it('it should have a status code of 200', (done) => {
    chai.request(server)
        .get('/house/2')
        .end((err, res) => {
                res.should.have.status(200);
            done();
        });
    });
});