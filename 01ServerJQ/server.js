// Import the http module. It's a core module develped by NodeJS.
var http = require('http');
var module1 = require('./module1');
var module2 = require('./module2');
// Now you can use the different methods for that core module. This case: createServer.
http.createServer(onRequest).listen(8000);

function onRequest(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(module1.myString);
	response.write(module2.myVariable);
	module1.myFunction();
	module2.myFunction();
	response.end();
}