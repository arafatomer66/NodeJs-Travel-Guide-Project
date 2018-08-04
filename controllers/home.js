// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('home/index', {userList: result, name: req.session.loggedUser.username});
	
	});
});





router.get('/create', function(req, res){
	res.render('home/create', {errs: []});
});

router.get('/browsebus', function(req, res){
	res.redirect('/browsebus', {errs: []});
});

router.get('/browsehotel', function(req, res){
	res.redirect('/browsehotel', {errs: []});
});

router.get('/browsehelp', function(req, res){
	res.redirect('/browsehelp', {errs: []});
});

router.get('/signup', function(req, res){
	res.redirect('home/signup', {errs: []});
});


router.get('/adminuser', function(req, res){
	res.render('home/adminuser', {errs: []});
});



router.post('/create', function(req, res){
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
			res.render('home/create', {errs: errors});
		}
		else
		{
			userModel.insert(user, function(result){
				res.redirect('/adminuser');
			});
		}
		
	});
});







module.exports = router;
