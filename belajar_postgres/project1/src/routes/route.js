const express = require('express')
const router = express.Router();

const produkController = require('../controller/controller')

router.get('/',produkController.getAllProduk)

router.post('/', produkController.postProduk)

module.exports = router;