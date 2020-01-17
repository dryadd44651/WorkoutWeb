
var express = require("express");
var app = express();
var port = Number(process.env.PORT || 3000);
app.listen(port,console.log("listening..."));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
var ejs = require('ejs');
var nomgo = require("./mongoDB");
//====

//====
var flag = false;

app.get('/', function(req, res){
    //console.log(req.body.user);
    res.render('index.ejs');
});

app.get('/plan', function(req, res){
    //console.log(localStorage);
	//let ts = Date.now();
	//console.log(req.body.lastLogInTime);
    if(flag){
        res.render('plan.ejs');
        flag = false;
    }
    else{
		//res.redirect('/');
		res.render('tmp.ejs');
		//res.redirect('/logIn');
	}
        
});

app.get('/db', function(req, res){

	
	nomgo.getExercise(req.query.user,function(result){
		//console.log(result);
		return res.set('application/xml').send(result);
	});
	
    //console.log(req.query.user);
    //res.render('index.ejs');
});

app.post("/finsh",function(req, res){
	
	console.log(Object.keys(req.body));
	var key = Object.keys(req.body)
	key.forEach(k => {
		//console.log(req.body[k])
		weight = req.body[k];
		len = k.length;
		str = k.replace("_w",'').toLocaleLowerCase();
		if(k[len-2] == '_'){
			console.log(req.body.user,str,weight);
			nomgo.updateExercise(req.body.user,str,weight);
		}
			
	});
	

	res.redirect('/plan');
});

app.get("/logIn",function(req, res){
	//res.redirect('/');
	var lastTime = req.query.lastLogInTime
	let time =Math.floor( Date.now()/1000);
	//console.log(req);
	console.log(Math.abs(lastTime - time));
	if(Math.abs(lastTime - time)<600){
		console.log("to /plan")
		flag = true;
		return res.set('application/xml').send('/plan');
		
	}
	else{
		console.log("to /")
		return res.set('application/xml').send('/');
		
	}
		
});

app.post("/",function(req, res){
	console.log(req.body.Account);
    console.log(req.body.Password);
	
	//tmp = {"acc":"admin"};
  	nomgo.getACC(req.body.Account,function(result){
		console.log(result[0].pws);
		if(req.body.Password == result[0].pws){
        //res.send({ bool: 'true' });
			
        	flag = true;
        	res.redirect('/plan');

    	}
		else{
			console.log(result[0]);
			var result = '';
			res.render('index.ejs',{ result: 'Wrong password' });
			//res.send({ bool: 'false' });
			//res.render('index.ejs');
					//res.redirect('/');

		}
		
	});
	
    
    //res.render('index.ejs');
});


