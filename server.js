const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./lib/api');

const app = express();

app.use('/api', cors());
app.use('/api', api);
app.use(express.static(path.join(__dirname, '/dist')));

const port = process.env.PORT || 2922;

app.get('/port', (req, res) => {
  res.json({ port });
});

app.listen(port, function() {
  console.log('Listening on ' + port);
});
