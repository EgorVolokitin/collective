'use strict';
const express = require('express');
const router = express.Router();
const { validateToken } = require('../api/auth');
const db = require('../api/schemas/db');

async function createRenderProps(cookies) {
  const token = await validateToken(cookies.authentication);

  if(!token) {
    return await {
      auth: {
        isAuthenticated: false
      },
      user: {
        uid: null,
        nickname: null
      }
    }
  }

  let user = await db.Users.findOne({
    attributes: ['nickname'],
    where: {
      id: token.uid
    }
  });
  
  return await {
    auth: {
      isAuthenticated: true
    },
    user: {
      uid: token.uid,
      nickname: user.dataValues.nickname
    }
  }
}

router.get('/', async function(req, res) {
  let props = await createRenderProps(req.cookies);
  props.title = 'Главная';

  res.render('index', props);
});

router.get('/signin', async function(req, res) {
  let props = await createRenderProps(req.cookies);
  props.title = 'Вход';

  res.render('signIn', props);
});

router.get('/profile/:id', async function(req, res) {
  let props = await createRenderProps(req.cookies);
  let user = await db.Users.findOne({
    attributes: ['nickname'],
    where: {
      id: req.params.id
    }
  });

  if(!user) {
    // TODO :: рендерить 404 страницу
    res.redirect('/');
    return null;
  }
  props.title = user.dataValues.nickname;
  props.pageUser = {
    nickname: user.dataValues.nickname
  }

  res.render('profile', props);
});

router.get('/qqq', async function(req, res) {
  const token = await validateToken(req.cookies.authentication);
  res.send('qqq');
}) 


module.exports = router;
