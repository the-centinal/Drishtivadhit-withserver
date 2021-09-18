const express = require('express');
const hidiMainController = require('../controllers/hindimaincontroller');

const router = express.Router();


// Get request hindi
router.get('/',hidiMainController.index);
router.get('/app',hidiMainController.app);
router.get('/loginmain',hidiMainController.loginmain);
router.get('/events',hidiMainController.event);
router.get('/gaol',hidiMainController.goal);
router.get('/member',hidiMainController.members);
router.get('/donate',hidiMainController.donation);
router.get('/docup',hidiMainController.docupload);
// router.get('/register',hidiMainController.re);
router.get('/news',hidiMainController.news);
// router.get('/app',hidiMainController.app);




module.exports =router;