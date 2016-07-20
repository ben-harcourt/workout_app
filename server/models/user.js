module.exports=function(sequelize, DataTypes){
	//User model created using sequelize
	var User=sequelize.define('user', {
		username: DataTypes.STRING,
		passwordHash: DataTypes.STRING,
	});
	return User;
};