var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('newview',{ songname : req.query.nsong});
  console.log("new view is rendered");

      console.log(req.query.nsong);


});

module.exports = router;
