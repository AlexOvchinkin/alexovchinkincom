const mongo = require('../lib/mongo');
var mongodb = require('mongodb');

module.exports = function (req, res, next) {
  const db = mongo.getDB();

  const id = req.params.id;
  if (!id) return next('param ID is empty');

  db.collection('articles')
    .find({
      '_id': new mongodb.ObjectID(id)
    })
    .next(function (err, article) {
      if (err) return next(err);
      res.json(article);
    })
};
