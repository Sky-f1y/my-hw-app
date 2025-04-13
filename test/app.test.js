const chai = require('chai');
const expect = chai.expect;
const http = require('http');

describe('GET /', () => {
  it('should return the expected JSON', (done) => {
    http.get('http://localhost:6969/', (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        const parsed = JSON.parse(data);
        expect(parsed).to.deep.equal({
          this: "is",
          my: "web"
        });
        done();
      });
    });
  });
});
