const express = require('express')
const router = express.Router()

const {postSiswa,
     postFisika, 
     postMatematika,
     updateMatematika,
     updateSiswa} = require('../controller/controller')


router.post('/siswa',postSiswa)

router.post('/fisika',postFisika)

router.post('/matematika',postMatematika)

router.put('/matematika',updateMatematika)

router.put('/siswa',updateSiswa)


module.exports = router;