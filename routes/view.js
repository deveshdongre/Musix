var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function(req, res, next) {

  res.render('view' ,{ title: 'Player' , songname : req.query.nsong} );
    console.log(req.query.nsong);
});

module.exports = router;
