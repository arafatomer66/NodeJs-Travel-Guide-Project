// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/admin-login-model');

router.get('/', function(req, res){
		res.render('home/adminhome');
		
});



module.exports = router;