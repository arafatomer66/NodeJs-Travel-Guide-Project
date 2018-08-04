module.exports = {
	create:{
		username: {type: 'string', required: true, max: 8},
		password: {type: 'string', required: true, min: 6},
		phone: {type: 'string', required: true, min: 11}
	},
	update:{
		
	}
};