const model = require('../models/createModel')

exports.postUser = async(req,res) => {
    const {username,email} = req.body
    try {
        const newUser = await model.postUser(username,email)

        res.status(201).send(newUser)
        } catch (error) {
        console.log(error)
        res.status(500).send("Error....")
    }
}


exports.postProfil = async (req,res) => {
    const {profilId,nama,bio} = req.body

    try {
        const newProfil = await model.postProfil(profilId,nama,bio)

        res.status(201).send(newProfil)
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Error....')
    }
}

exports.postContent = async(req,res) => {
    const {authorId,title,content} =req.body

    try {
        const newPost = await model.postContent(authorId,title,content)

        res.status(201).send(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error....')
    }
}

exports.postCategory = async(req,res) => {
    const {categoryId, nama} = req.body

    try {
        const newCategory = await model.postCategory(categoryId,nama)

        res.status(201).send(newCategory)
    } catch (error) {
        console.log(error)
        res.status(500).send("Errorrr.....")
    }
}

