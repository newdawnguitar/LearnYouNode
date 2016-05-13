var http = require('http');
var fullData = "";

var url = process.argv[2];

http.get(url, onGet);

function onGet(response)
{
	response.on("data", updateData);
	response.on("end", onDataEnd);
}

function updateData(data)
{
	fullData += data.toString();
}

function onDataEnd()
{
	console.log(fullData.length);
	console.log(fullData);
}