const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./auth');

router.post('/login', async function (req, res) {
        console.log(req);
        res.send('OK, Login successfull');
    })

    .post('/register', async function(req, res) {
        if(req.body.password !== req.body.confirmedPassword) {
            // TODO :: Добавить вывод ошибки если пароли не совпали. + сделать такую же логику проверки паролей на клиенте
            res.clearCookie('authentication').redirect('/signin')
            return null;
        }

        const user = await auth.register({ email: req.body.email, password: req.body.password, nickname: req.body.nickname });
        const token = await auth.authenticate(user.dataValues.id);
        console.log(token);

        res.cookie('authentication',
        token,
        { secure: true }).redirect('/');
    })

    .get('/', function (req, res) {
        res.send('response')
    })


module.exports = router;