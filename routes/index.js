var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shedule Bot for PM-1-16 Test' });
});

module.exports = router;
