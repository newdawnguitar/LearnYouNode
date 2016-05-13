var http = require('http');
var saved =[];
var counter = 3;

for(var i=2; i<5; i++)
{
	saved[i-2] = "";
	getDataForIndex(process.argv[i], i-2);
}

function finishUp()
{
	
	for(var j=0;j<saved.length;j++)
	{
		console.log(saved[j]);
	}
	
}

function getDataForIndex(url, index)
{
	var temp = "";
	http.get(url, function onGetData(response)
		{
				response.on("data", function updateData(data)
					{
						temp += data.toString();
					});
				response.on("end", function onDataEnd(){
					saved[index] = temp;
					counter--;
					if(counter == 0)
						finishUp();
				});
		});
}