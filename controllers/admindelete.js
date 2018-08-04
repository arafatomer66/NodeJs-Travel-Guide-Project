// DECLARATION
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var userModel = require.main.require('./models/user-model');



 


router.get('/', function(req, res){
	userModel.getAll(function(result){
		res.render('home/admindelete', {userList: result, name: req.session.loggedUser.username});
		
	});
});


router.post('/', function(req, res){
	var user = {
		userId: req.body.userid
		
	};

	
    userModel.delete(user, function(result){
				res.redirect('/admindelete');
			});
    
   console.log("deleted");
    
});


router.get('/', function(req, res){
		res.render('home/admindelete');
		
});





module.exports = router;