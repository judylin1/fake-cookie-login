var express = require('express');
var router = express.Router();

//form that posts to a route with the path /fake-login
router.post('/fake-login', function(req, res, next){
//set a cookie named currentUser and set the value to whatever the user entered
  res.cookie('currentUser', req.body.user_name);
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  var currentUser = req.cookies.currentUser
  var visits = parseInt(req.cookies.visits, 10) || 0;
  visits++
  res.cookie('visits', visits);
  res.render('index', {title: 'Fake Cookie Login',
  currentUser: currentUser,
  visits: visits});
});

router.post('/logout', function(req, res, next) {
  res.clearCookie('visits');
  res.clearCookie('currentUser');
  res.redirect('/');
});

module.exports = router;
