var router=require('express').Router();
var sequelize=require('../db');
var Log=sequelize.import('../models/log');
//create log
router.post('/', function(req, res){
	var description=req.body.log.desc;
	var result=req.body.log.result;
	var owner=req.user.id;
	var definition=req.body.log.def;

	Log.create({
		description: description,
		result: result,
		owner: owner,
		def:definition

	}).then(function createSuccess(log){
		res.json(log);

	},
	function createError(err){
		res.send(500, err.message);
	}
	);
});
//fetch logs by userid
router.get('/', function(req, res){
	var owner=req.user.id;//shortify
	Log
	.findAll({
		where:{owner:owner} //or, remove var owner, where:{owner:req.user.id}
	})
	.then(
		function findAllSuccess(data){
			res.json(data);

		},
		function findAllError(err){
			res.send(500, err.message);
		}
		);
});
module.exports=router;