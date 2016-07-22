require('dotenv').config();
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sequelize=require('./db.js');

//Creates table(s) in Postgres
sequelize.sync(); //sequelize.sync({force:true}); //drops the table completely and recreates it
app.use(bodyParser.json());
app.use(require('./middleware/headers.js'));
app.use(require('./middleware/validate-session'));
app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));
app.use('/api/test', function(req, res){
	res.send("hello world");
});
app.listen(3000, function(){
	console.log("app is listening on port 3000");
});
//run it with 
//node app.js
//on command prompt