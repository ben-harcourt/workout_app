//definition model needs description, logtype, and an owner
module.exports=function(sequelize, Datatypes){
	var Definition=sequelize.define('definition',{
		description: DataTypes.STRING,
		logType: DataTypes.String,
		owner: DataTypes.INTEGER


	});
	return Definition;
};