const express = require('express');
const cors = require('cors');
const api = require('./server/api');
const bodyParser = require('body-parser')

// Express instance
const app = express();

// enable CORS for dev-mode
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// API routes
app.use('/api', api);

// start dev-server
app.listen(3000, function () {
  console.log('dev-server running on port 3000');
});
