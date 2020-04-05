const express = require('express');
const router = express.Router();
const conn = require('../config/connection'); 

router.get('/', (req, res, next) => {
    res.render('admin/index')
})


router.route('/produk')
    .get((req, res, next) => {
        let sql = "SELECT * FROM produk";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.render('admin/produk',{
                results: results,
                title: 'Dashboard Myhijab'
            });
        }) 
}); 

// tambah data
router.post('/save', (req, res) => {
    message = '';
    if (req.method == "POST") {
        let post = req.body;
        let nama = post.nama_produk;
        let harga = post.harga_produk;
        let stok = post.stok;

        if (!req.files)
            return res.status(400).send('Tidak ada file yang diupload.');
        
        let file = req.files.foto_produk;
        let img_name = file.name;

        if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
            
            file.mv('public/images/produk/' + file.name, function (err) {
                if (err)
                    return res.status(500).send(err);
                // let data = {nama_produk: nama, harga_produk: harga, stok: stok, foto_produk: img_name};
                // let sql = "INSERT INTO produk SET ?";
                let sql = "INSERT INTO `produk`(`nama_produk`,`harga_produk`,`stok`,`foto_produk`) VALUES ('" + nama + "','" + harga + "','" + stok + "','" + img_name + "')";
                let query = conn.query(sql, (err, results) => {
                    if (err) throw err;
                    res.redirect('/admin/produk');
                });
            
            });

        } else {
            message = "Format ini tidak diizinkan, upload file dengan format '.png', '.jpeg', '.gif'";
            res.render('index.hbs', {message: message});
        }
    } else {
        res.render('index');
    }
});

// tambah data
// router.post('/save', (req, res) => {
//     let data = {nama_produk: req.body.nama_produk, harga_produk: req.body.harga_produk, stok: req.body.stok };
//     let sql = "INSERT INTO produk SET ?";
//     let query = conn.query(sql, data, (err, results) => {
//         if (err) throw err;
//         res.redirect('/admin/produk');
//     });
    
// });

// tambah data
// router.post('/save', (req, res) => {
//     upload(req, res, err => {
//         if (err) throw err;
//         let data = { nama_produk: req.body.nama_produk, harga_produk: req.body.harga_produk, stok: req.body.stok, foto_produk: req.file.filename };
//         let sql = "INSERT INTO produk SET ?";
//         let query = conn.query(sql, data, (err, results) => {
//             if (err) throw err;
//             res.redirect('/admin/produk'); 
//         });
//     })

// });

// edit produk
router.post('/update', (req, res) => {
    let sql = "UPDATE produk SET nama_produk ='" + req.body.nama_produk + "', harga_produk='" + req.body.harga_produk + "', stok='" + req.body.stok + "' WHERE id_produk=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        res.redirect('/admin/produk');
    });
});

// delete produk
router.post('/delete', (req, res) => {
    let sql = "DELETE FROM produk WHERE id_produk=" + req.body.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/admin/produk');
    });
});



module.exports = router;