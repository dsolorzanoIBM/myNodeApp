var express = require('express');
var router = express.Router();
var os = require("os");
var mongoose = require('mongoose');

var reqSchema = new mongoose.Schema({
	timestamp_id: {type: Number, index: {unique: true}},  // Date.now()
	hostname: String,
});
var reqDoc = mongoose.model('Request', reqSchema);

var db = mongoose.connection;

mongoose.connect('mongodb://mongodb/cluster_usage');

/* GET users listing. */
router.post('/', function(req, res, next) {
	var current_request = new reqDoc({
		timestamp_id: Date.now(),
		hostname: os.hostname()
	});
	current_request.save(function (err, results) {
		if (err) {
			res.send('Error saving to DDBB');
			console.error(e);
			process.exit(1);
		} else {
			res.send('saving to DDBB');
			console.log('Saved: ', results);
		}
	});
});

router.get('/', function(req, res, next) {
	reqDoc.find({}, function(error, result){
		if (error) {
			console.error(error);
		}
		else {
			console.log(result);
			res.send(result);
		}
	});
});

module.exports = router;