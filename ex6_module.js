module.exports = function(dir, del, callback)
{
	var fs = require('fs');
	var path = require('path');
	var returnList = [];

	fs.readdir(dir, onRead);
	function onRead(err, list)
	{
		
		if(err)
		{
			return callback(err);
		}

		for (var i=0;i<list.length;i++)
		{
			var obj = list[i];
			var ext = path.extname(obj);
			
			if(ext.indexOf(del)>-1)
			{
				returnList.push(obj);
			}

		}


		callback(null, returnList);
	}
}