const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const users = require('./../config/users.js')

// 验证是否登录
function validation(req, res, next) {
  if(req.session.userName) {
    next();
  } else {
    res.redirect('/login')
  }
}

// 寻找是否有这个用户
function findUser(name) {
  let user = null;
  users.some((item, index) => {
    if(item.name === name){
      user = item;
      return true;
    }
  });
  return user;
}

// 登录验证账号密码
async function login(name, pass) {
  const user = findUser(name);
  if(!user) return { err: new Error('找不到该账号') };

  if(user.pass === crypto.createHash('md5').update(pass).digest('hex') ){
    return {err: null, user: user};
  } else {
    return {err: new Error('密码错误')}
  }
}

router.use((req,res,next) => {
  var err = req.session.error;
  var msg = req.session.message;
  delete req.session.error;
  delete req.session.message;
  res.locals.message = '';
  res.locals.userName = req.session.userName ? req.session.userName : '';
  if (err) res.locals.message = `<p style='color:red'>${err}</p>`;
  if (msg) res.locals.message = `<p style='color:blue'>${msg}</p>`;
  next();
})

/* GET home page. */
router.get('/', validation, (req, res, next) => {
  res.render('index', { title: 'Express', name: req.session.name });
});

/**
 * 登录
 */
router.get('/login', (req, res) => {
  res.render('login', { title: '登录' })
})

router.post('/login', (req, res) => {
  const { name, pass } = req.body;

  login(name, pass)
  .then(({err, user}) => {
    if(err) {
      req.session.error = '账号或者密码错误，请重新输入';
      res.redirect('/login');
    } else {
      req.session.regenerate(() => {
        req.session.userName = name;
        res.redirect('/');
      })
    }
  })
})

/**
 * 注册
 */
router.get('/register', (req, res) => {
  res.render('register');
})

router.post('/register', (req, res) => {
  const {name, pass} = req.body;
  users.push({
    name,
    pass: crypto.createHash('md5').update(pass).digest('hex')
  });
  console.log(name, pass, users);
  req.session.message = '注册成功，请登录';
  res.redirect('/login');
})

module.exports = router;
