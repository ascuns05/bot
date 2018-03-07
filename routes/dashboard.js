var express = require('express');
var router = express.Router();
let botData = require('../model/bot_model');

let data = {
  title: 'ads',
  data: botData
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', data);
  console.log(data.data)
});

module.exports = router;
