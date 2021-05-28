var ping = require("ping");
const fs = require('fs');

var hosts = [ "google.com","192.168.88.2408", "yahoo.com"];

var potato = fs.readFileSync('hello.txt').toString().split("\r\n");
console.log(potato);




/////


////


potato.forEach(function (host) {

	
		ping.sys.probe(host, function (isAlive) {
			var msg = "";
			if (isAlive) {
				msg = host + " " + "Успешный пинг сэр";

				
			} else {
				msg = host + " " + "не хуя не успешный";
			}
			console.log(msg);
		});
	});
////////////////*************************************** */
// 	var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
// 	potato.forEach(function(host){
//     ping.sys.probe(host, function(isAlive){
//         var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
//         console.log(msg);
//     });
// });



