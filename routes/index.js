const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ECT_EXPRESS' });
});

router.get('/signin', function(req, res) {
  res.render('signIn', { title: 'SIGNIN' });
});

router.get('/signin', function(req, res) {
  res.render('signIn', { title: 'SIGNIN' });
});

router.get('/profile', function(req, res) {
  res.render('profile', { title: 'profile' });
});

module.exports = router;
