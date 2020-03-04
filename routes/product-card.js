const express = require('express');
const router = express.Router();
const conn = require('../config/connection');

router.get('/', (req, res, next) => {
    let sql = "SELECT * FROM produk";
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.render('partials/product-card', {
            results: results
        });
    });
});

module.exports = router;