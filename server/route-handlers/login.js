const mongo = require('../lib/mongo');
const { isPasswordValid } = require('../lib/users');
const jwt = require('jsonwebtoken');
const config = require('../confidential/config');

module.exports = function(req, res, next) {
  const db = mongo.getDB();
  const name = req.body.name;
  
  if(!name) return res.status(401).json({ msg: 'Authentication failed' });

  db.collection('users').findOne({ name: name })
    .then(user => {
      if(!user) {
        return res.status(401).json({ msg: 'Authentication failed' });
      }

      if(isPasswordValid(user, req.body.password)) {
        const token = jwt.sign({ name: name }, config.jwtSecret, { expiresIn: '24h' });
        return res.status(200).json({ token: token });
      }

      return res.status(401).json({ msg: 'Authentication failed' });
    })
    .catch(err => next(err));
}