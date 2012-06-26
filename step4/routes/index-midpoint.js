
exports.index = function (req, res) {
  res.render('index', {
    title : 'Hello World'
  });
};

exports.login = {
  get : function (req, res) {
    res.render('login', {
      title : 'Login'
    });
  }
};

exports.logout = function (req, res) {
  res.redirect('/');
};

exports.register = {
  get : function (req, res) {
    res.render('register', {
      title : 'Register'
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
