let express = require('express')
, router = express.Router()
, botData = require('../model/bot_model')
;

router.get('/', function(req, res, next) {
  let userCollection = require('../model/crud').allRead();
  userCollection.then(data => {
    res.render('dashboard', { data });
  } );

});

module.exports = router;
