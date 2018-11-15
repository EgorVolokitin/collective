const express = require('express');
const router = express.Router();

router.post('/login', function (req, res) {
        res.send('OK, Login successfull');
    })
    .get('/', function (req, res) {
        res.send('response')
    })


module.exports = router;