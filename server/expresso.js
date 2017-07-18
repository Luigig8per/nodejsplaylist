var express = require('express');
var app = express();

var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'celdjl@gmail.com',
    pass: 'djl544bb'
  }
});

transporter.use('compile', hbs({
  viewPath: 'views/email',
  extName: '.hbs'
}));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/sendmail', function(req, res, next){

  transporter.sendMail({
    from: 'Luis Matamoros ✔ <celdjl@gmail.com>',
    to: 'luis.m4a@gmail.com',
     subject: 'Hello ✔', // Subject line
    template:'recover',
    context: {
      username:'djl544bb',
      password: 'lasdfsfsf'
    }
  }, function(err, response){

    if(err){
      res.send("email malo");
    }
 console.log('Message sent: ');
    res.send("good email");
  });

});

app.get('/profile/:name', function(req,res){
  res.send('You are viewing the profile of ' + req.params.name);
});

app.listen(3000);
