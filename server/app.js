var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sequelize=require('./db.js');

//Creates table(s) in Postgres
sequelize.sync(); //sequelize.sync({force:true}); //drops the table completely and recreates it
app.use(bodyParser.json());
app.use(require('./middleware/headers.js'));
app.post('/api/user', function(req, res){
	var username=req.body.user.username;
	var pass=req.body.user.password; //TODO: make it hashed
	User.create({
		username:username,
		passwordHash: '' //TODO: make it hashed
	}).then(
	function createSuccess(user){
		res.json({
			user:user,
			messagee: 'created'
		});
	},
	function createError(err){
		res.send(500, err.message);
	}
	);
});
app.use('/api/test', function(req, res){
	res.send("hello world");
});
app.listen(3000, function(){
	console.log("app is listening on port 3000");
});
//run it with 
//node app.js
//on command prompt