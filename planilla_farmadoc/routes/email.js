var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', { title: 'Express'});
});

router.get('/sendmail', function(req, res, next){
  res.send("send mail");
});

module.exports = router;
