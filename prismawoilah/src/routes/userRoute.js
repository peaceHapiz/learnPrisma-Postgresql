const express = require('express');
const { login } = require('../controller/userController');
const router = express.Router();

router.post('/', login);

module.exports = router;
