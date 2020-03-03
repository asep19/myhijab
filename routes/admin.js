var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('admin/index', {title: 'Dashboard Myhijab'});
});
 

module.exports = router;