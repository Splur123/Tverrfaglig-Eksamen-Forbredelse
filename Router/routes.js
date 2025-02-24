const express = require('express');
const router = express.Router();
const {renderindex} = require('../Controllers/controller');


router.get('/index', renderindex);

module.exports = router;