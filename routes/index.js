var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/hit/:rn', function(req, res, next) {
//   console.log(req.params.rn)
// });

router.get('/hit/:val', function(req, res, next) {
  console.log(req.params.val)
});

module.exports = router;
