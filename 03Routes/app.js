//Url module to get the path
var url = require('url');
var fs = require('fs');

module.exports = {
	handleRequest: function (request, response){
		response.writeHead(200, {'Content-Type':'text/html'});
		// We can access to our url property from the request object.
		// Interesting only in the pathname.
		var path = url.parse(request.url).pathname;
		switch(path){
			case '/':
				renderHTML('./index.html', response);
				break;
			case '/login':
				renderHTML('./login.html', response);
				break;
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();
		}
	}
}

function renderHTML(path, response){
	fs.readFile(path, null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('File not found!');
		} else{
			response.write(data);
		}
		response.end();
	});
}