const mongo = require('../lib/mongo');
var mongodb = require('mongodb');

module.exports = function (req, res, next) {
  const db = mongo.getDB();

  const id = req.params.id;
  if (!id) return next('param ID is empty');

  let objID;

  try {
    objID = new mongodb.ObjectID(id);
  } catch(e) {
    return res.status(404).send('ID is invalid');
  }

  db.collection('articles')
    .find({
      '_id': objID
    })
    .next(function (err, article) {
      if (err) return next(err);
      res.json(article);
    })
};
