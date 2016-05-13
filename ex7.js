var h = require('http');
var url = process.argv[2];

h.get(url, onGet);

function onGet(response)
{
	response.on("data", showData);
}

function showData(data)
{
	console.log(data.toString());
}