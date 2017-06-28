var express = require('express');
var router = express.Router();

/* GET profs listing. */
router.get('/', function(req, res, next) {
  res.render('marouteprof', {  });
});

module.exports = router;
