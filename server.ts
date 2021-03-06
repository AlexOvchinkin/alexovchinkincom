// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';

const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./server/api');
const mongo = require('./server/lib/mongo');
const logger = require('./server/lib/logger');
const users = require('./server/lib/users');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

app.use(cors());

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// connect to Mongo DB
mongo.connect(function(dbInstance) {
  users.setDefaultUsers(dbInstance);
});

const PORT = process.env.PORT || 4000;
//const DIST_FOLDER = join(process.cwd(), 'dist');
const DIST_FOLDER = process.cwd();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

// TODO: implement data requests securely
app.use('/api', api);

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// global error handler
function errorHandler(err, req, res, next) {
  logger.error(err);
  res.status(500).json(err);
}

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});