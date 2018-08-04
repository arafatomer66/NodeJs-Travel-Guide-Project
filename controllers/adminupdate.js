// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('home/adminupdate', {userList: result, name: req.session.loggedUser.username});
	
	});
});


router.post('/', function(req, res){
	var user = {
		userId: req.body.useridd,
        password: req.body.passwordd
		
	};

    userModel.update(user, function(result){
               
				res.redirect('/adminupdate');
			});
    console.log("Updated");
    
});


router.get('/', function(req, res){
		res.render('home/adminupdate');
		
});





module.exports = router;