var net = require('net');
var port = process.argv[2];
var server = net.createServer(socketHandler);
server.listen(port);

function socketHandler(socket)
{
	var date = getDate();
	socket.write(date);
	socket.end();
}

function getDate()
{
	var str = "";
	var d = new Date();
	//year
	str = d.getFullYear();

	//month
	var month = d.getMonth() + 1;
	str += "-"+formatNum(month);

	//day
	var day = d.getDate();
	str += "-"+formatNum(day);

	//hour
	var hour = d.getHours();
	str += " "+formatNum(hour);

	//minutes
	var min = d.getMinutes();
	str +=":"+formatNum(min)+"\n";

	return str;
}

function formatNum(num)
{
	if(num < 10)
		return "0"+num.toString();
	return num.toString();
}