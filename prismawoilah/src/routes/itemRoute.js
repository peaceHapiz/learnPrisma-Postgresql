const express = require('express');
const { addItem, restockItem, reduceStock, getAllItems } = require('../controller/itemController');
const { isSuperAdmin, isAdmin } = require('../function/cekRole');
const router = express.Router();


router.post('/add', isSuperAdmin, addItem);


router.post('/restock',isSuperAdmin, restockItem);

router.post('/reduce',isAdmin, reduceStock);


router.get('/', getAllItems);

module.exports = router;
