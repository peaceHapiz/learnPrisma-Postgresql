const Produk = require('../models/model')

exports.getAllProduk = (req,res) => {
    Produk.getAllProduk((err,result) => {
        if (err) {
            res.status(500).json({message : err.message})        
        } else {
            res.send(result);
        }
    })
}

exports.postProduk = (req,res) => {
    const {namaBarang, jumlahStok, hargaBarang} = req.body;

    if (!namaBarang || !jumlahStok || !hargaBarang) {
        res.status(400).send({message : "nama,harga dan stok dibutuhkan..."})
    } else {
        const postBarang = {
            namaBarang,
            jumlahStok,
            hargaBarang
        }

        Produk.postProduk (postBarang, (err,result) => {
            if (err) {
                res.status(500).send({message : err.message})
            } else {
                res.json({
                    message : "Post Produk Sukses...",
                    data : postBarang
                })
            }
        })
    }
}