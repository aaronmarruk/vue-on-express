var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { params: {
    title: 'Vue on Express',
    ssstitle: 'Vue on Express',
  }
  });
});

module.exports = router;
