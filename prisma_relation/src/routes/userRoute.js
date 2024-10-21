const express = require('express');
const { createUser, getAllUsers } = require('../controller/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);

module.exports = router;
