//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
//var mongoDB = 'mongodb://127.0.0.1/huaDB';
var mongoDB = "mongodb+srv://Howard:0324@cluster0-elldn.mongodb.net/Workout?retryWrites=true&w=majority"
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var ModelSchema = new Schema({
    acc: String,
    pws: String
},{ collection : 'account' });


var accModel = mongoose.model('account', ModelSchema );

function createAcc(account){
	accModel.create({ acc: account.acc, pws: account.pws }, function (err, awesome_instance) {
		if (err) 
			console.log("error");
		else
			console.log("sussecc");
	});
}

var userModelObj = {};
//===========






module.exports = {
getACC: function(account,result){
	
	accModel.find( {acc:account} , function (err, awesome_instance) {
		if (err) 
			console.log("error");
		else{
			result(awesome_instance);
		}
	});
},

getExercise: function(user,result){
	//console.log(user);
	//console.log(mongoose);
	
	var ModelSchemaEx = new Schema({
		item:String,
		weight:Number
	},{ collection : user });

	if(userModelObj[user]==undefined)
		userModelObj[user] = mongoose.model(user, ModelSchemaEx );
	console.log(userModelObj[user]);
	userModelObj[user].find( {} , function (err, awesome_instance) {
		if (err) 
			console.log("error");
		else{
			//console.log(awesome_instance);
			result(awesome_instance);
			mongoose
		}
	});

},
updateExercise: function(user, ExItem, ExWeight, result){
	//console.log(user);
	//console.log("update: "+user, ExItem, ExWeight);
	var ModelSchemaEx = new Schema({
		item:String,
		weight:Number
	},{ collection : user });
	if(userModelObj[user]==undefined)
		userModelObj[user] = mongoose.model(user, ModelSchemaEx );
	
	userModelObj[user].findOneAndUpdate({ item:ExItem }, { $set: { weight: ExWeight }},
	function (err, awesome_instance) {
		console.log(awesome_instance);
		if (err) return handleError(err);});
}

}	
	


tmp = {"acc":"admin"};
//console.log(getACC(tmp));

