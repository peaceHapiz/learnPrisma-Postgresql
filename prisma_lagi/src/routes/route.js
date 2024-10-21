const express = require('express')
const router = express.Router()

const createController = require('../controller/createController')
const updateController = require('../controller/updateController')

router.post('/user',createController.postUser)
router.post('/profil',createController.postProfil)
router.post('/post',createController.postContent)
router.post('/kategori',createController.postCategory)

router.put('/user',updateController.updateUser)
router.put('/profil',updateController.updateProfil)

module.exports = router;