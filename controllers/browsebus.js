// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var medicineModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	medicineModel.getAll2(function(result){
		res.render('home/browsebus', {medicineList: result});
	
	});
});


router.get('/', function(req, res){
		res.render('home/browsebus');

});

router.post('/', function(req, res){
	var user = {
		medid: req.body.medidd,
        mediamount: req.body.medamount
		
	};

    medicineModel.inven(user, function(result){
				//res.redirect('/browsemdcn');
			});
    medicineModel.sold(user, function(result){
				res.redirect('/browsebus');
			});
    
});

router.post('/browsebus', function(req, res){
	var user = {
		medid: req.body.medidd,
        mediamount: req.body.medamount
		
	};

    medicineModel.insertorder(user, function(result){
				res.redirect('/browsebus');
			});
    
});



module.exports = router;
