var express = require('express');
var router = express.Router();


let data = {
  title: 'Dashboard'
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', data);
});

module.exports = router;
