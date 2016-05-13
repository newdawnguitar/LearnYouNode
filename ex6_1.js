var dir = process.argv[2];
var del = process.argv[3];

var m = require('./ex6_module');

m(dir, del, onPrint);

function onPrint(err, data)
{
	if(err){
		console.log(err);
		return;
	}

	for (var i=0;i<data.length;i++)
	{
		var obj = data[i];
		console.log(obj);
	}
}
