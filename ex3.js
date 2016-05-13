var fs = require('fs');

var b = fs.readFileSync(process.argv[2]);
var str = b.toString();
var s = str.split('\n');
console.log(s.length-1);