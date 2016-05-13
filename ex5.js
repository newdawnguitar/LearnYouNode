var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var del = process.argv[3];

fs.readdir(dir, onRead);

function onRead(err, list)
{
	for (var i=0;i<list.length;i++)
	{
		var obj = list[i];
		var ext = path.extname(obj);
		
		if(ext.indexOf(del)>-1){
			console.log(obj);
		}

	}
}