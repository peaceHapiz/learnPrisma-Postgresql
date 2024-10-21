const client =require('../config/database')

const Produk = {}

Produk.getAllProduk = (result) => {
    client.query(`select * from produk`, (err,res) => {
        if(err) { 
            console.log(message = err.message)
            result(null,err)
        } else { 
            result(null,res.rows)
        }
    })
}

Produk.postProduk = (namaBarang, jumlahStok,hargaBarang, result) => {
    client.query(`insert into produk(nama, stok, harga)
                  values ($1,$2 ,$3 ) RETURNING *`, [namaBarang, jumlahStok, hargaBarang],(err,res) => {
                    if (err) {
                        console.log(message = err.message)
                        result(null,err)
                    } else {
                        result(null,res)
                    }
                  })
}

module.exports = Produk;

