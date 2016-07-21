$(function(){
	$.extend(workoutLog,{
		definition:{
			userDefinitions:[],
			create: function(){
				var def={
					desc:$("#def-description").val(),
					type:$("#def-logtype").val()
				};
				var postData={definition:def};
				var define=$.ajax({
					type:"POST",
					url: WorkoutLog.API_BASE +"definition",
					data: JSON.stringify(postData),
					contentType:"application/json"
				});
				define.done(function(data){
					WorkoutLog.definition.userDefinitions.push(data.definition);
				});
				define.fail(function(){
					console.log('oh no');
				});
			},
			fetchAll:function(){

			}
		}
	});

	$("#def-save").on("click", WorkoutLog.definition.create);
});