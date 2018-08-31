const express = require('express');
const cors = require('cors');
const api = require('./server/api');
const bodyParser = require('body-parser');
const mongo = require('./server/lib/mongo');
const logger = require('./server/lib/logger');
const users = require('./server/lib/users');

// Express instance
const app = express();

// enable CORS for dev-mode
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// connect to Mongo DB
mongo.connect(function(dbInstance) {
  users.setDefaultUsers(dbInstance);
});

// API routes
app.use('/api', api);

// global error handler
function errorHandler(err, req, res, next) {
  logger.error(err);
  res.status(500).json(err);
}

// start dev-server
app.listen(3000, function () {
  console.log('dev-server running on port 3000');
});
