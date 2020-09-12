const express = require('express');
const app = express();
const revision = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString().trim()
const ver  = require('./package.json');
app.get('/healthcheck', function (req, res) {
     res.send('OK');
});
app.get('/version', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.json({ "myapplication":[{"version": ver.version, "lastcommitsha": revision, "description": "pre-interview technical test"}]});
  //res.json({ version: [ver.version], lastcommitsha: [revision], description: 'pre-interview technical test'  });
});
app.listen(9000, function () {
  console.log('Server listening on port 9000!');
});
module.exports = app; //for unit tests
