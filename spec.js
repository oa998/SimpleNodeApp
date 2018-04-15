let server;
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Testing Express endpoints...', () => {

  beforeEach(function () {
    server = require('./index');
  });

  afterEach(function () {
    server.close();
  });

  it('"/randomNumber" endpoint responds with status 200', (done) => {
    chai.request(server)
      .get('/randomNumber')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('2. gets a value between 0 and 1 from the /randomNumber address', (done) => {
    chai.request(server)
      .get('/randomNumber')
      .end((err, res) => {
        expect(res.text<1).to.equal(true);
        expect(res.text>0).to.equal(true);
        done();
      });
  });

  it('3. gets a 404 status response from other addresses', (done) => {
    chai.request(server)
      .get('/anUndefinedEndpoint')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
