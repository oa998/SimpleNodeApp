let server;
const request = require('supertest');
const assert = require('assert');

describe('loading express', function () {
  beforeEach(function () {
    server = require('./index');
  });

  afterEach(function () {
    server.close();
  });

  it('1. gets a 200 status response from the /randomNumber address', (done) => {
    request(server)
      .get('/randomNumber')
      .expect(200, done)
  });

  it('2. gets a value between 0 and 1 from the /randomNumber address', (done) => {
    request(server)
      .get('/randomNumber')
      .expect(200)
      .then(response => {
          console.log('Response: ', response.text);
          assert(Number(response.text)<1, true)
          assert(Number(response.text)>0, true)
      })
      .catch(console.log)
      .then(done);
  });

  it('3. gets a 404 status response from other addresses', (done) => {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
