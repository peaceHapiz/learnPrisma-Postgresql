const express = require('express')

const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

const client = require('./config/database')

const produkRouter = require('./routes/route')

const app = express()

app.use(bodyParser.json())

app.use('/produk',produkRouter)




client.connect(err => {
    if (err) {
        console.log(err.message)
    }else {
        console.log("database connected...")
    }
})

app.listen(port, () => {
    console.log(`Program run on port : ${port}`)
}  )