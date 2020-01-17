
function viewPlan(plans,id){

		
	x = "";
	for(p in plans){
		console.log(p);
		x +="<h2>" + p + "</h2>";
		
		for(ex in plans[p]){
			console.log(ex);
			x+=ex+"<br>";
		}
	}
	document.getElementById(id).innerHTML = x;
	//document.getElementById("plan").innerHTML = "";	
	
}
function listPlan(plans,id){

		
	x = "";
	for(p in plans){
		console.log(p);
		console.log(plans[p]);
		x +="<tr><td width=50%><label>"+p+" ： </label></td>";
		x +="<td width=25%><input class=wieght type=number name="+p+"_w value="+plans[p]+"></td>";
		x +="<td><button  type=button class=item  name="+p+">0</button></td>";
		x +="<input type=hidden value= 0 id="+p+"  name="+p+"></tr>"
		//<label for="male">Male</label>
		//<button type="button" class="btn btn-primary">Primary</button>
	}
	document.getElementById(id).innerHTML = x;


	
}
/*
$("table").on("click","input",function() {
    var v = $(this)[0].value;
    console.log($(this)[0].value);
	
	$(this)[0].value =getWeight(v);
	

});

function getWeight(weight) {
  var txt;
  var newWeight = prompt("Please enter your weight:", weight);
  if (newWeight == null || newWeight == "") {
    txt = "User cancelled the prompt.";
  } else {
    return newWeight;
  }
}
*/
$(".btn-lg").on("click",function(){
	window.location.replace("/");
});

//update the user
$("form").on("click","#submit",function() {
	if($("#Account").val()){
		localStorage.workoutLogInUser = $("#Account").val();
		console.log(localStorage.workoutLogInUser);
	}
	$("#user")[0].value = localStorage.workoutLogInUser;
	
});

var timer = setInterval(Timer, 2000);
$("table").on("tap","button",function() {
    var v = $(this)[0].innerText;
    //console.log($(this).val());
	console.log("tap");
	v++;
	var name = $(this)[0].name;
	$("#"+name).val(v);
	//console.log($(this)[0].name);
	//v = $(this).val();
	
	$(this)[0].innerText = v;
	//console.log("#"+name);
	console.log(timer);
	timer = 0;
	$("#timer").removeClass("hide");
	
});
function Timer(){
	timer++;
	$("#timer").text(timer);
}


$("table").on('press', "button",function(e) {
    console.log('press');
	var v = $(this)[0].innerText;
	v = 0;
	var name = $(this)[0].name;
	$("#"+name).val(v);
	$(this)[0].innerText = v;
	$("#timer").addClass("hide");
});
function setPlan2Select(plans,id){

		
	x = "";
	for(p in plans){
		//console.log(p);
		//x +="<h2>" + p + "</h2>";
		x += "<option value="+p +">"+p+"</option>";
		
	}
	document.getElementById(id).innerHTML = x;
	//document.getElementById("plan").innerHTML = "";	
	
}


$('#select').on('change', function() {
  var value = $(this).val();
	console.log(plans[value]);
  listPlan(plans[value],"plan");
});





