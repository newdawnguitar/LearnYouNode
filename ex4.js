var fs = require('fs');

var b = fs.readFile(process.argv[2], onDone);

function onDone(err, contents)
{
	var str = contents.toString();
	var s = str.split('\n');
	console.log(s.length-1);
}