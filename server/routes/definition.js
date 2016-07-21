var router=require('express').Router();
var sequelize=require('../db');
var Definitions=sequelize.import('../models/definition');
//create definition
router.post('/', function(req, res){
	var description=req.body.definitions.desc;
	var logType=req.body.definitions.tpe;
	var owner=req.user.id;

	Definition.create({
		description: description,
		logType: logType,
		owner: owner

	}).then(function createSuccess(definition){
		res.json({
			definition: definition,
		});

	},
	function createError(err){
		res.send(500, err.message);
	}
	);
});
//fetch definitions by userid
router.get('/', function(req, res){
	var owner=req.user.id;//shortify
	Definition
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