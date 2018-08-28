const mongo = require('../lib/mongo');

module.exports = function (req, res, next) {
  const db = mongo.getDB();
  const newTag = req.body.tag;

  if (!newTag) return next('Tag is empty');

  db.collection('tags').insertOne({
      tag: newTag
    },
    function (err, result) {
      if (err) return next(err);
      res.status(200).json([{
        tag: result
      }]);
    });
}
