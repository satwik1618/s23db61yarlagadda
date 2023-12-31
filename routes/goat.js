var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('goat', { title: 'goat' });
});

var express = require('express');
const goat_controlers= require('../controllers/goat');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET goats */
router.get('/', goat_controlers.goat_view_all_Page );
router.get('/detail', secured, goat_controlers.goat_view_one_Page);
router.get('/create', secured, goat_controlers.goat_create_Page);
router.get('/update', secured, goat_controlers.goat_update_Page);
router.get('/delete', secured, goat_controlers.goat_delete_Page);


module.exports = router;