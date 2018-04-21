var express = require('express');
var router = express.Router();

/* GET users listing. */
// localhost:3000/users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// localhost:3000/users/db
router.get('/:name(dd|db)', function(req, res, next) {
  res.send(req.params.name);
});

module.exports = router;
