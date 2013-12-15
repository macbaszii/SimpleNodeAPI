var express = require('express');
var app = express();
var http = require('http');

var userService = require('./user');

// Setup Express MiddleWare
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.bodyParser());
app.use(express.urlencoded());

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// User API Interface
app.get('/api/users', userService.list);
app.post('/api/user', userService.create);
app.put('/api/user', userService.update);
app.del('/api/user', userService.erase);

// Start Server and Waiting for Request
http.createServer(app).listen(app.get('port'), function(){
	console.log('\nNode RESTFul API Example by iMacbaszii');
  console.log('Server listening on port ' + app.get('port'));
});