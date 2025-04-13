// test/app.test.js
const chai = require('chai');
const expect = chai.expect;
const http = require('http');
const app = require('../index'); // <- We'll modify index.js to export the app
let server;

describe('GET /', () => {
  before((done) => {
    server = app.listen(6969, done);
  });

  after(() => {
    server.close();
  });

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
