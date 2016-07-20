$(document).ready(function(){
	$("#testAPI").on("click", function(){
		console.log("it's working");
		var test=$.ajax({
			type: "GET",
			url: "http://localhost:3000/api/test"//make sure that the url is the same as local server
		});
		test.done(function(data){
			console.log(data);
		});

		test.fail(function(){
			console.log("oh noes!!!");
		});
	});
});