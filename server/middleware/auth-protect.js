const jwt = require('jsonwebtoken');
const config = require('../confidential/config');
const mongo = require('../lib/mongo');

module.exports = function(req, res, next) {
  const token = req.headers.authorization;

  try {
    const user = jwt.verify(token, config.jwtSecret);
    const db = mongo.getDB();

    db.collection('users').findOne({ name: user.name })
      .then(user => {
        if(!user) return res.status(401).json({ msg: 'Authorization failed' });
        next();
      })
      .catch(err => res.status(401).json({ msg: 'Authorization failed' }));

  } catch(e) {
    res.status(401).json({ msg: 'Authorization failed' });
  }
};