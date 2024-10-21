const express = require('express')
const router = require('./routes/route')

const app = express()
const port  = process.env.PORT || 4000

app.use(express.json())


app.use('/',router)

app.listen(port,() => {
    console.log(`Program run http://localhost:${port}`)
})