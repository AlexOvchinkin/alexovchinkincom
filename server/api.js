const express = require('express');
const router = express.Router();

router.post('/new-article', require('./route-handlers/new-article'));
router.post('/new-tag', require('./route-handlers/post-new-tag'));

router.get('/articles', require('./route-handlers/get-articles'));
router.get('/article/:id', require('./route-handlers/get-article-by-id'));
router.get('/tags', require('./route-handlers/get-tags'));

module.exports = router;
