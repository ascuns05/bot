let express = require('express')
, router = express.Router()
, botData = require('../model/bot_model')
, userCollection = require('../model/crud').allRead()
;

userCollection.then( (data) => { 
  router.get('/', function(req, res, next) {
    res.render('dashboard', { data });
    console.log(data[0].id)
  });
});


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('dashboard', data);
//   console.log(data.length)
// });

module.exports = router;
