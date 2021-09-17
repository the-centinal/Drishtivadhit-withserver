const express = require('express');
const newsController = require('../controllers/newscontroller');
const mainController = require('../controllers/maincontroller');


const router = express.Router();

router.get('/news',newsController.news);
router.get('/',mainController.index);
module.exports = router;