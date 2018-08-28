const mongo = require('../lib/mongo');
const JSONStream = require('JSONStream');

module.exports = function (req, res, next) {
  const db = mongo.getDB();
  const cursor = db.collection('articles').find();

  // дописать отбор
  console.log(req.params);

  cursor.on('error', function (err) {
    return next(err);
  });

  cursor
    .pipe(JSONStream.stringify())
    .pipe(res);
};
