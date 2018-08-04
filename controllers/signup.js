// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');


var userModel = require.main.require('./models/user-model');




router.get('/', function(req, res){
	res.render('home/signup', {errs: []});
});


//router.get('/', function(req, res){
//		res.render('home/signup');
//
//});

router.post('/', function(req, res){
	var user = {
		username: req.body.username,
		password: req.body.password,
        address: req.body.address,
        phone: req.body.phone
	};

	var validator = new asyncValidator(userRules.create);
    
    
    validator.validate(user, function(errors, fields){
		if(errors)
		{
			res.render('home/signup', {errs: errors});
		}
		else
		{
			userModel.insert(user, function(result){
				res.redirect('/logout');
			});
		}
		
	});
	
    
    
});







module.exports = router;