function getData(user,callback) {
	
	if(localStorage.workoutLogInTime == undefined)
		localStorage.workoutLogInTime = 0;
	var Time = localStorage.workoutLogInTime;
    //$("#logInForm").submit(function() { // intercepts the submit event
      $.ajax({ // make an AJAX request
        type: "GET",
        url: "/db", // it's the URL of your component B
        data: "user="+user, // serializes the form's elements
		error: function () {
			alert("error");

		},
		success: function(data)
        {

			
			console.log(data);
			
			callback(data);

			
		}
      });
	  //e.preventDefault(); // avoid to execute the actual submit of the form
	  //alert("wrongd");
    //});

  }
