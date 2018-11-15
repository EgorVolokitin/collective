const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ECT_EXPRESS' });
})
.get('/signin', function (req, res) {
    res.render('signin', {});
})
    // .post('/api/login', function (req, res) {
    //     res.send('qwertyui');
    // })

router.get('/signin', function(req, res) {
  res.render('signIn', { title: 'SIGNIN' });
});

router.get('/signin', function(req, res) {
  res.render('signIn', { title: 'SIGNIN' });
});

module.exports = router;
