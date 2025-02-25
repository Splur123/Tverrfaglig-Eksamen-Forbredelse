const express = require('express');
const router = express.Router();
const authController = require('../Controllers/controller');


router.get('/register', authController.renderRegister);

router.post('/register', authController.register)

module.exports = router;