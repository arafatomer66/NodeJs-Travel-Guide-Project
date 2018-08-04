var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM users";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO users VALUES (null, ?, ?, ?, ?)";
		var param = [user.username, user.password, user.address, user.phone];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    insertorder: function(user, callback){
		var sql = "INSERT INTO medorder VALUES (null, ?, ?, ?, ?) WHERE medid = ?";
		var param = [user.orusername, user.ormedicine, user.orquantity, user.orprice, user.medid];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    
    delete: function(user, callback){
		var sql = "DELETE FROM users WHERE userId = ?";
		var param = [user.userId];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    update: function(user, callback){
		var sql = "UPDATE users SET password =? WHERE userId =?";
		var param = [user.password, user.userId];
        console.log(user.password, user.userId);

		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    inven: function(user, callback){
		var sql = "UPDATE bus SET totalItem = totalItem - ? WHERE id =?";
		var param = [user.mediamount, user.medid];
        

		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    sold: function(user, callback){
		var sql = "UPDATE bus SET sold = sold + ? WHERE id =?";
		var param = [user.mediamount, user.medid];
        

		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
    
	getAll2:function(callback){
		var sql = "SELECT * FROM bus";
		db.getData(sql, null, function (results) {
			callback(results);
		});

        },
    getAll3:function(callback){
		var sql = "SELECT * FROM hotel";
		db.getData(sql, null, function (results) {
			callback(results);
		});

        },
    getAll4:function(callback){
		var sql = "SELECT * FROM help";
		db.getData(sql, null, function (results) {
			callback(results);
		});

        },
    getAll5:function(callback){
		var sql = "SELECT * FROM bus order by sold DESC";
		db.getData(sql, null, function (results) {
			callback(results);
		});

        }
};
