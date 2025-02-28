const express = require('express');
const router = express.Router();
const authController = require('../Controllers/controller');


router.get('/register', authController.renderRegister);
router.get('/login', authController.renderLogin);

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/authorize', authController.authorize)

module.exports = router;