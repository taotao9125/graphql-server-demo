var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');

const cn = mysql.createConnection(dbConfig('mfw'));
const query = `
select * from hotel_otaroom_booking limit 0, 1000;
`.toUpperCase();

router.get('/users', function(req, res){
    cn.connect();
    cn.query(query, function(error, ret, field) {
       
        if (error) throw error;
        res.json({
            status: 10000,
            errmsg: '',
            data: {
                list: ret
            }
        });
        //cn.release();
        
    });
   
});

module.exports = router;