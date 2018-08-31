const crypto = require('crypto');
const config = require('../confidential/config');
const logger = require('./logger');

function setDefaultUsers(db) {
  const users = getUsers();
  const userPromises = users.map(user => updateUser(db, user));
  
  Promise.all(userPromises)
   .then(result => console.log('Default users updated successfully'))
   .catch(err => logger.error(err));
};

function updateUser(db, user) {
  return db.collection('users').updateOne(
    { 'name': { $eq: user.name } },
    { $set: user },
    { upsert: true }
  );
}

function getUsers() {
  const users = config.defaultUsers;

  users.forEach(user => {
    user.default = true;
    user.password = hashPassword(user.password);
  });

  return users;
}

function hashPassword(password) {
  return crypto.pbkdf2Sync(password, config.password.salt, 2048, 32, 'sha512').toString('hex');
}

module.exports = {
  setDefaultUsers: setDefaultUsers,
  hashPassword: hashPassword
}