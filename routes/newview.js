var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('newview',{ title: 'Player' , songname : req.query.nsong});
  console.log("new view is rendered");
  if(req.query.nsong == ''){
    console.log("nothing enterend");
  }
  else{
      console.log(req.query.nsong);
      
  }


});

module.exports = router;
