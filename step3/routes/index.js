
/*
 * GET home page.
 */

exports.index = function(req, res){
  req.session.visits++;
  res.render('index', { title: 'Express' })
};
