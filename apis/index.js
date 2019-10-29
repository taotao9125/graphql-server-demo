var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){
    res.send({
        a: 1,
        b: 2
    });
});

module.exports = router;