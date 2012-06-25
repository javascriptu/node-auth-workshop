var Nohm = require('nohm').Nohm
  , userModel = require('../lib/models/user.js')
  , passport = require('passport')
  ;

exports.index = function (req, res) {
  res.render('index', {
    title : 'Hello World'
  });
};

exports.login = {
  get : function (req, res) {
    res.render('login', {
      title : 'Login',
      message: req.flash('error')
    });
  },
  post : passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
  })
};

exports.logout = function (req, res) {
  req.logOut();
  res.redirect('/');
};

exports.register = {
  get : function (req, res) {
    res.render('register', {
      title : 'Register'
    });
  },

  post : function (req, res, next) {
    var user = Nohm.factory('User');

    user.p('email', req.param('email'));
    user.p('password', req.param('password'));

    user.save(function (err) {
      if (err) {
        console.log('Error registering : %s', user.errors);
        res.render('register', {
          title : 'Register',
          err   : user.errors
        });
      } else {
        res.redirect('/login');
      }
    });
  }
};

exports.home = function (req, res) {
  res.render('home', {
    title : 'Home'
  });
};

exports.notFound = function(req, res) {
  res.render('error/404', {
    title : 'Not found 404'
  });
};
