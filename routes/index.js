'use strict';
const express = require('express');
const router = express.Router();

// Функция рендера страницы с учетом аутентифицированности пользователя
function renderPage(pageName, title, cookies, res) {
  cookies.authentication ?
    res.render(pageName, { title: title, auth: {
      isAuthenticated: true
    }}) :
    res.render(pageName, { title: title, auth: {
      isAuthenticated: false
    }});
}

router.get('/', function(req, res) {
  renderPage('index', 'Главная', req.cookies, res);
});

router.get('/signin', function(req, res) {
  renderPage('signIn', 'Вход', req.cookies, res);
});

module.exports = router;
