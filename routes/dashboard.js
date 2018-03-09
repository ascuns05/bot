let express = require('express')
, router = express.Router()
, sheludes = require('../model/shedule')
, error = {}
;

// console.log('\n \n \n');
router.post('/', (req, res) => {
  console.log(req);
  if (req.body.name === 'admin' && req.body.pass === 'admin') {
    let userCollection = require('../model/crud').allUserRead();
    let controlsCollection = require('../model/crud').allControlsRead();
    Promise.all([userCollection, controlsCollection]).then(function(src) {
      res.render('dashboard', { data: src[0], controls: src[1], sheludes });
    });
    } else {
      error.message = 'Не верно введен логин или пароль';
      res.render('login', { error });
    }
  
});
router.get('/', function(req, res, next) {
  error.message = ' ';
  if (req.cookies.uid == 'test') {
    let userCollection = require('../model/crud').allUserRead();
    let controlsCollection = require('../model/crud').allControlsRead();
    Promise.all([userCollection, controlsCollection]).then(function(src) {
      res.render('dashboard', { data: src[0], controls: src[1], sheludes  });
    });
    } else {
      error.message = '';
      res.render('login', { error });
    }

});

module.exports = router;
