const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const auth = require('./auth');

router.post('/login', async function (req, res) {
        const user = await auth.login({ emailOrNick: req.body.emailOrNick, password: req.body.password });
        if(!user) {
            res.send('Не верно введен логин или пароль');
            return null;
        }
        const token = await auth.authenticate({ uid: user.dataValues.id });

        res.cookie('authentication',
        token, {
            secure: true
        }).redirect('/');
    })

    .post('/register', async function(req, res) {
        if(req.body.password !== req.body.confirmedPassword) {
            // TODO :: Добавить вывод ошибки если пароли не совпали. + сделать такую же логику проверки паролей на клиенте
            res.clearCookie('authentication').redirect('/signin')
            return null;
        }

        const user = await auth.register({ email: req.body.email, password: req.body.password, nickname: req.body.nickname });
        const token = await auth.authenticate({ uid: user.dataValues.id });

        res.cookie('authentication',
        token, {
            secure: true
        }).redirect('/');
    })

    .get('/', function (req, res) {
        res.send('response')
    })


module.exports = router;