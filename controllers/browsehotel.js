// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var medicineModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	medicineModel.getAll3(function(result){
		res.render('home/browsehotel', {pharmaList: result});
		//res.json(result);
	});
});


router.get('/', function(req, res){
		res.render('home/browsehotel');

});





module.exports = router;
