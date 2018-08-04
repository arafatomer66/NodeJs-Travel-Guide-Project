// DECLARATION 
var express = require('express');
var app = express();
var port = 8000;

var path = require('path');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

var login = require('./controllers/login');
var logout = require('./controllers/logout');
var home = require('./controllers/home');
var adminhome = require('./controllers/adminhome');
var adminuser = require('./controllers/adminuser');
var browsebus = require('./controllers/browsebus');
var browsehotel = require('./controllers/browsehotel');
var browsehelp = require('./controllers/browsehelp');
var signup = require('./controllers/signup');
var admindelete = require('./controllers/admindelete');
var adminupdate = require('./controllers/adminupdate');
var admincontrol = require('./controllers/admincontrol');



// CONOFIGURE
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'sryigoahlnsdbflsidyf', saveUninitialized: true, resave: false}));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap3/dist')));
app.use(express.static('./node_modules/jquery/dist'));
app.use(express.static('./public'));


// ROUTES

app.get('*', function(req, res, next){
	if(req.url == '/' || req.url == '/login' || req.url =='/signup')
	{
		next();
		return;
        
        
	}

	if(req.session.loggedUser == null)
	{
		res.redirect('/login');
		return;
	}
	next();
});






app.get('/', function(req, res){
	res.redirect('/login');
});

app.use('/login', login);
app.use('/logout', logout);
app.use('/home', home);
app.use('/adminhome', adminhome);
app.use('/adminuser', adminuser);
app.use('/browsebus', browsebus);
app.use('/browsehotel', browsehotel);
app.use('/browsehelp', browsehelp);
app.use('/signup', signup);
app.use('/admindelete', admindelete);
app.use('/adminupdate', adminupdate);
app.use('/admincontrol', admincontrol);






// SERVER START
app.listen(port, function(){
	console.log('Listenting at port .. ' + port + ' ...');
});