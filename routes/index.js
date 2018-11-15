var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ECT_EXPRESS' });
});

router.get('/qqq', function (req, res) {
    res.render('index', { title: '&copy; JKOVPIDORAS OFFICIAL SITE' })
})

router.get('/signin', function(req, res) {
  res.render('signIn', { title: 'SIGNIN' });
});

module.exports = router;
