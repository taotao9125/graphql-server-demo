var express = require('express');
var router = express.Router();
var Controllers = require('../controller/index');

router.get('/', Controllers.IndexController);

module.exports = router;