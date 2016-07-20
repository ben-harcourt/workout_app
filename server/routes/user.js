var router=require('express').Router();
var sequelize=require('../db.js');
var User=sequelize.import('../models/user');
var bcrypt=require('bcryptjs');
var jwt=require('jsonwebtoken');
router.post('/', function(req, res){
	var username=req.body.user.username;
	var pass=req.body.user.password; //TODO: make it hashed
	User.create({
		username:username,
		passwordHash: bcrypt.hashSync(pass,10) //TODO: make it hashed
	}).then(
	function createSuccess(user){
		var token=jwt.sign({id:user.id}, "Shhhh I'm a secret", {expiresIn: 60*60*24});
		res.json({
			user:user,
			message: 'created',
			sessionToken: token
		});
	},
	function createError(err){
		res.send(500, err.message);
	}
	);
});
module.exports=router;