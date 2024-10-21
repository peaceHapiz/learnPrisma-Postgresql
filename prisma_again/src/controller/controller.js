const model = require('../model/model')

exports.postSiswa = async (req,res) => {
    const {nama, kelas} = req.body

    try {
        const newSiswa = await model.postSiswa(nama, kelas)

        res.status(201).send(newSiswa)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Errorr...")
    }
}
exports.postMatematika = async (req,res) => {
    const {matematikaId,kode_guru, nilai} = req.body

    try {
        const newMatematika = await model.postMatematika(matematikaId,kode_guru, nilai)

        res.status(201).send(newMatematika)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Errorr...")
    }
}
exports.postFisika = async (req,res) => {
    const post = req.body

    try {
        const newfisika = await model.postFisika(post)

        res.status(201).send(newfisika)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Errorr...")
    }
}

exports.updateMatematika = async(req,res) => {
    const {matematikaId,kode_guru, nilai} = req.body
    try {
        const updatedMatematika = await model.updateMatematika(matematikaId,kode_guru, nilai)

        res.status(201).send(updatedMatematika)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Errorr...")
    }
}

exports.updateSiswa = async(req,res) => {
    const {nis,nama,kelas} = req.body
    try {
        const updatedSiswa = await model.updateSiswa(nis,nama,kelas)

        res.status(201).send(updatedSiswa)
    } catch (err) {
        console.log(err.message)
        res.status(500).send("Errorr...")
    }
}