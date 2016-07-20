var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var sequelize=require('./db.js');

//Creates table(s) in Postgres
sequelize.sync({force:true}); //sequelize.sync({force:true}); //drops the table completely and recreates it
app.use(bodyParser.json());
app.use(require('./middleware/headers.js'));
app.use('/api/user', require('./routes/user'));
app.use('/api/test', function(req, res){
	res.send("hello world");
});
app.listen(3000, function(){
	console.log("app is listening on port 3000");
});
//run it with 
//node app.js
//on command prompt