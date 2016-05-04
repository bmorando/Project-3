var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/game_host', function(req, res, next) {
  res.render('game_host', { title: 'Express', user: req.user });
});
// router.get('/', function(req, res, next) {
//   res.render('game.player', { title: 'Express', user: req.user });
// });

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
  ));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
  ));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
