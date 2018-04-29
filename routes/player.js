var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // Get list of songs either from Database or FileSystem Module:
        //    songs = [ {
        //      title : "",
        //      path : "",
        //    }, {}, {} ]

  // res.render('player', { title: 'Player' , songs : songs});


  res.render('player', { title: 'Player' , songname : req.query.nsong});
  console.log(req.query.nsong);
});

module.exports = router;
