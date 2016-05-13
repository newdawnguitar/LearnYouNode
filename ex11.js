var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(serverHandler);
server.listen(port);

function serverHandler(req, res)
{
	var read = fs.createReadStream(file);
	read.pipe(res);
}
