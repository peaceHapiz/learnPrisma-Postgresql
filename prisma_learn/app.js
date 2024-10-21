const express = require('express')
const app = express()

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(express.json())
const port = process.env.PORT || 3000

app.post('/user', async(req,res) => {
    const user = req.body
    const result = await prisma.user.create({
        data:user,
    })
    res.send(result)

})
app.post('/post', async(req,res) => {
    const post = req.body
    const result = await prisma.post.create({
        data:post,
    })
    res.send(result)

})
app.put('/updatepost', async(req,res) => {
    const id =  req.body.id
    const post = req.body
    delete post.id
    const result = await prisma.post.update({
        where: {
            id:id
        },
        data: post
    })
    res.send(result)
 
})
app.delete('/deletepost/:id', async(req,res) => {
    const id =  req.params.id
        const result = await prisma.user.delete({
        where: {
            id: parseInt(id)
        },

    })
    res.send(result)
 
})



app.listen (port ,() => {
    console.log(`Program run on http://localhost:${port}`)
})