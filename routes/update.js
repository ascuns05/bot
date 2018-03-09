let express = require('express')
, router = express.Router()
, db = require('../model/crud')
;
 

router.post('/', (req, res) => {
  if (req.cookies.uid === 'test') {
    console.log(req.body);
    for (key in req.body) {
      db.updateOption(key, req.body[key])
    }
    res.status(200);
  }
});

module.exports = router;