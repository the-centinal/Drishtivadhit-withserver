const express = require('express');
const newsController = require('../controllers/newscontroller');
const mainController = require('../controllers/maincontroller');
const logController = require('../controllers/logcontroller');
const docController = require('../controllers/doccontroller');
const passport = require('passport');
const passportLocal = require('../config/passport-local-startagy');
const uploadfile = require('../config/uploadfile');


const router = express.Router();

router.get('/news',passport.checkAuthentication,newsController.news);
router.get('/',mainController.index);
router.get('/register',mainController.register);
router.get('/docupload',mainController.docupload);
router.get('/loginmain',mainController.loginmain);
router.post('/register',logController.register);
// router.post('/login', function(req, res, next) {
  
//   passport.authenticate('local', function(err, user, info) {
//       console.log(req.body);
//       // console.log(err);
//       console.log('info is ',info);
//   })(req, res, next);
// });
router.post('/login',passport.authenticate('local',{
  failureRedirect: '/loginmain'}),function(req, res) {

    res.redirect('/');
  });

router.post('/uploadmultiple',passport.checkAuthentication ,docController.docupload);
module.exports = router;