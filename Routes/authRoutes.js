const express = require('express');
const router = express.Router();
const authController = require('../Controllers/controller');


router.get('/register', authController.renderRegister);
router.get('/reinregister', authController.renderReinRegister);
router.get('/login', authController.renderLogin);
router.get('/user', authController.renderUser);

router.post('/register', authController.register)
router.post('/reinregister', authController.reinRegister)
router.post('/login', authController.login)

module.exports = router;