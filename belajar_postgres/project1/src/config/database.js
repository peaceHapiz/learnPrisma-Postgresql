const { Client } =require('pg')

const client = new Client({
    host : "localhost",
    user : "postgres",
    port : 5432,
    password : "root",
    database : "toko_baru"
})

client.connect();



module.exports = client;