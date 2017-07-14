var express = require('express');
var router = express.Router();

var nodemailer = requiere('nodemailer');
var hbs = require('nodemailer-express-handlebars');

var mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'celdjl@gmail.com',
    pass: 'djl544bb',
  }
})

/* GET HOME PAGE */
router.get('/', function(req,res, next){
  res.render('index',{title: 'Express'});
});

router.get('/sendmail', function(req, res, next){

  mailer.sendmail({
    from:'support@codeplastick.com',
    to: 'celdjl@gmail.com',
    subject: 'Password Recovery',
    template:'recover',
    context:{
      username: 'Luis',
      password: 'lassd'
    }
  }, function(err,response){
    if(err){
      res.send("bad email");
    }
    res.send("good email")

  });
});

mailer.use('compile',hsb({
  viewPath: 'views/email',
  extName: '.hsb'
}));

module.exports = router;
