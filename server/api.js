const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth-protect');

router.post('/new-article', auth, require('./route-handlers/new-article'));
router.post('/new-tag', auth, require('./route-handlers/new-tag'));
router.post('/login', require('./route-handlers/login'));

router.get('/articles/all', require('./route-handlers/get-articles-all'));
router.get('/articles/tag/:id', require('./route-handlers/get-articles-tag'));
router.get('/article/:id', require('./route-handlers/get-article'));
router.get('/tags', require('./route-handlers/get-tags'));

module.exports = router;
