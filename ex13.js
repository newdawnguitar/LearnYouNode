var port = process.argv[2];
var http = require('http');
var url = require('url');

var server = http.createServer(serverHandler);
server.listen(port);

function serverHandler(req, res)
{
	if(req.method == 'GET')
	{
		var u = url.parse(req.url);
		var path = u.path.toString();
		var prefix = u.path.split("?")[0];
		console.log(prefix);
		var dateObj;

		switch(prefix)
		{
			case "/api/parsetime":
				console.log('parsetime');
				var iso = u.path.split("/api/parsetime?iso=");
				dateObj = parseTime(iso[1]);
				break;


			case "/api/unixtime":
				console.log('unixtime');
				var iso = u.path.split("/api/unixtime?iso=");
				dateObj = parseUnixTime(iso[1]);
				break;
				
		}

		res.write(JSON.stringify(dateObj));
		res.end();	
	
	}
}

function parseTime(iso)
{
		var date = new Date(iso);
		var obj = new Object();
		obj.hour = date.getHours();
		obj.minute = date.getMinutes();
		obj.second = date.getSeconds();
		return obj;
}

function parseUnixTime(iso)
{
	var date = new Date(iso);
	var obj = new Object();
	obj.unixtime = date.getTime();
	return obj;
}