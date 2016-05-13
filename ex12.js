var port = process.argv[2];
var map = require('through2-map')  
var http = require('http');

var server = http.createServer(serverHandler);
server.listen(port);

function serverHandler(req, res)
{
	if(req.method == 'POST')
	{
		req.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
}