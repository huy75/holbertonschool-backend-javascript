const { expect } = require("chai");
const request = require('request');

describe('API test', () => {
    it('respond with 200 code and body', (done) => {
      request('http://localhost:7865', 'GET', (err, res, body) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
      });
      done();
  });
});
