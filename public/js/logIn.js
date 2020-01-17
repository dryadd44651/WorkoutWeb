function logInTest() {
	//Math.floor(ts/1000)
	if(localStorage.workoutLogInTime == undefined)
		localStorage.workoutLogInTime = 0;
	var Time = localStorage.workoutLogInTime;
    //$("#logInForm").submit(function() { // intercepts the submit event
      $.ajax({ // make an AJAX request
        type: "GET",
        url: "/logIn", // it's the URL of your component B
        data: "lastLogInTime="+Time, // serializes the form's elements
		error: function () {
			alert("error");

		},
		success: function(data)
        {

			//alert("good");
			console.log(data);
			window.location.replace(data);

		//$(document).ready(function() {
  			//window.location.href = "";
  		//});
			
            // data.redirect contains the string URL to redirect to
            //console.log("good");
			
			//data.redirect('/');
        	//window.location = '/';

		}
      });
	  //e.preventDefault(); // avoid to execute the actual submit of the form
	  //alert("wrongd");
    //});

  }

function logInUpdate() {
	
	localStorage.workoutLogInTime = Date.now()/1000;
	$("#user").value = localStorage.workoutLogInUser;
}
