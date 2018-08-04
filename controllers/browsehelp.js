// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var medicineModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	medicineModel.getAll4(function(result){
		res.render('home/browsehelp', {ambuList: result});
		
	});
});


router.get('/', function(req, res){
		res.render('home/browsehelp');

});





module.exports = router;
