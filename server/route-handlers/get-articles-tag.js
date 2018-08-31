const mongo = require('../lib/mongo');
const mongodb = require('mongodb');
const JSONStream = require('JSONStream');

module.exports = function (req, res, next) {
  const db = mongo.getDB();

  const id = req.params.id;
  if (!id) return next('param ID is empty');

  /* let objID;

  try {
    objID = new mongodb.ObjectID(id);
  } catch (e) {
    return res.status(404).send('ID is invalid');
  } */

  const cursor = db.collection('articles')
    .find({
      'tag._id': id
    });

  cursor.on('error', function (err) {
    return next(err);
  });

  cursor
    .pipe(JSONStream.stringify())
    .pipe(res);
};
