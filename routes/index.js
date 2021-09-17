const express = require('express');
const newsController = require('../controllers/newscontroller');
const mainController = require('../controllers/maincontroller');
const logController = require('../controllers/logcontroller');



const router = express.Router();

router.get('/news',newsController.news);
router.get('/',mainController.index);
router.get('/register',mainController.register);
router.get('/docupload',mainController.docupload);
router.get('/loginmain',mainController.loginmain);
router.post('/register',logController.register);
router.post('/login',logController.login);
module.exports = router;