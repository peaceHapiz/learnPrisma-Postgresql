const model = require('../models/updatemodel')

exports.updateUser = async(req,res)=> {
    const {id,username,email} = req.body

    try {
        const updateUser = await model.updateUser( id,username,email)

        res.status(201).send(updateUser)
    } catch (error) {
        console.log(error)
        res.status(500).send("Errorrr....")
    }
}

exports.updateProfil = async(req,res)=> {
    const {id,nama,bio} = req.body

    try {
        const updateUser = await model.updateProfil( id,nama,bio)

        res.status(201).send(updateUser)
    } catch (error) {
        console.log(error)
        res.status(500).send("Errorrr....")
    }
}