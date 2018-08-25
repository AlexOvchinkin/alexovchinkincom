const express = require('express');
const router = express.Router();

router.post('/new-article', require('./route-handlers/new-article'));

router.get('/articles', require('./route-handlers/get-articles'));
router.get('/article/:id', require('./route-handlers/get-article-by-id'));

module.exports = router;
