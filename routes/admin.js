var express = require('express');
var router = express.Router();
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
                results: results
            });
        }) 
});

// router.get('/', (req, res, next) => {
//     let sql = "SELECT * FROM produk";
//     let query = conn.query(sql, (err, results) => {
//         if (err) throw err;
//         res.render('admin/index', {
//             results: results
//         });
//     });
// });

// tambah data
router.post('/save', (req, res) => {
    let data = { nama_produk: req.body.nama_produk, harga_produk: req.body.harga_produk };
    let sql = "INSERT INTO produk SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/admin');
        //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});

// edit produk
router.post('/update', (req, res) => {
    let sql = "UPDATE product SET product_name ='" + req.body.product_name + "', product_price='" + req.body.product_price + "' WHERE product_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        res.redirect('/');
    });
});

// delete produk
router.post('/delete', (req, res) => {
    let sql = "DELETE FROM produk WHERE id_produk=" + req.body.id_produk + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/admin');
    });
});

module.exports = router;