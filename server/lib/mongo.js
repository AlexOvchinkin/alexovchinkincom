const MongoClient = require('mongodb').MongoClient;
const config = require('../config');

const url = `mongodb://${config.mongo.server}`;
let db;

module.exports = {
  connect: function () {
    MongoClient.connect(url, {
        useNewUrlParser: true
      },
      function (err, client) {
        if (err) {
          console.log('Mongo DB connection error');
          return;
        }

        console.log("Mongo DB connected successfully");
        db = client.db(config.mongo.db);
      });
  },
  getDB: function () {
    return db;
  }
};
