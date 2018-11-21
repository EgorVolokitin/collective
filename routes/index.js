'use strict';
const express = require('express');
const router = express.Router();
const { validateToken } = require('../api/auth');

// Функция рендера страницы с учетом аутентифицированности пользователя
async function renderPage(pageName, title, cookies, res) {
  const token = await validateToken(cookies.authentication);
  console.log(token);
  token ?
    res.render(pageName, { title: title, auth: {
      isAuthenticated: true
    }}) :
    res.clearCookie('authentication')
      .render(pageName, { title: title, auth: {
      isAuthenticated: false
    }});
}

router.get('/', function(req, res) {
  renderPage('index', 'Главная', req.cookies, res);
});

router.get('/signin', function(req, res) {
  renderPage('signIn', 'Вход', req.cookies, res);
});

router.get('/qqq', async function(req, res) {
  const token = await validateToken(req.cookies.authentication);
  res.send('qqq');
}) 


module.exports = router;
