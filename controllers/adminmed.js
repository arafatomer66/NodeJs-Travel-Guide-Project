// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var medicineModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	medicineModel.getAll5(function(result){
		res.render('home/adminmed', {userList: result, name: req.session.loggedUser.username});
	
	});
});


router.get('/', function(req, res){
		res.render('home/adminmed');
		
});





module.exports = router;