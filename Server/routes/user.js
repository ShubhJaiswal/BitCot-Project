const express = require('express');
const router = express.Router();
const user = require('../controller/user');

router.post('/auth', user.auth)


// router.post('/register', function(req, res){

// });

module.exports = router;