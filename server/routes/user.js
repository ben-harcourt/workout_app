var router=require('express').Router();
var sequelize=require('../db.js');
var User=sequelize.import('../models/user');
router.post('/', function(req, res){
	var username=req.body.user.username;
	var pass=req.body.user.password; //TODO: make it hashed
	User.create({
		username:username,
		passwordHash: '' //TODO: make it hashed
	}).then(
	function createSuccess(user){
		res.json({
			user:user,
			message: 'created'
		});
	},
	function createError(err){
		res.send(500, err.message);
	}
	);
});
module.exports=router;