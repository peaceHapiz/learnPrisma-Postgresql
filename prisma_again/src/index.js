const express = require('express')
const route = require('./routes/route')

const app = express()
app.use(express.json())

app.use('/',route)

app.listen(3000, ()=> {
    console.log(`Program run on http://localhost:3000`);
})