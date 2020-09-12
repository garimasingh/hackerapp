let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../index.js');
//Our parent block
describe('Version', () => {
 describe('/GET version', () => {
     it('it should GET the app details', (done) => {
     chai.request(server)
       .get('/version')
       .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             done();
          });
       });
    });
  describe('/GET healthcheck', () => {
     it('it should GET healthcheck', (done) => {
     chai.request(server)
         .get('/healthcheck')
         .end((err, res) => {
             (res).should.have.status(200);
             (res.body).should.be.a('object');
             done();
          });
       });
   });
});
