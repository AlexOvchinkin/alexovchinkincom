const express = require('express');
const router = express.Router();

router.post('/new-article', function (req, res, next) {
  console.log(req.body);
  res.status(200).json('OK');
});

module.exports = router;
