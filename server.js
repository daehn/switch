var exec = require('child_process').exec;
var bodyParser = require("body-parser");
var express = require('express')
var sys = require('sys')

var app = express()
app.use(bodyParser.json());

function puts(error, stdout, stderr) { 
	if (stdout) {console.log(stdout)};
	if (stderr) {console.log(stderr)};
}

function changeSwitch(id, unit, state) {
	var stateString = state ? "1" : "0"
	var params = id + " " + unit + " " + stateString
	exec("cd ../rcswitch-pi/ && sudo ./send " + params, puts)
}

app.get('/', function (req, res) {
    res.send('Server up and running!')
})

app.post('/switch', function (req, res) {
	var id = req.body.id
	var unit = req.body.unit
	var state = req.body.state
	changeSwitch(id, unit, state)
	res.send(req.body)
})

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Server listening at http://%s:%s', host, port)
})
