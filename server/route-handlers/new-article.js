const mongo = require('../lib/mongo');

module.exports = function (req, res, next) {
  const db = mongo.getDB();

  const form = req.body;
  if (!form) return next('Form is empty');

  const fields = emptyFields(form);
  if (fields) return next(`Empty form fields: ${fields}`);

  db.collection('articles').insertOne(form, function (err) {
    if (err) return next(err);
    res.status(200).json('OK');
  });
};


function emptyFields(form) {
  const fields = [];

  if (!form.title) fields.push('title');
  if (!form.source) fields.push('source');
  if (!form.description) fields.push('description');
  if (!form.text) fields.push('text');

  return fields.join(', ');
}
