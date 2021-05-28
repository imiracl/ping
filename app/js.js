function myPing() {
	var ping = require("ping");
const fs = require('fs');
const { throws } = require("assert");

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
				fs.readFile('hello.txt', 'utf-8', function(err, data) {
					if (err) throw err;
			 
					var newValue = data.replace(host + "\r\n", '');
				//	var newValue = data.replace(/^(\s*\r\n){2,}/, "\r\n");
				//	newValue = data.replace('',"");
					
			 
					fs.writeFile('hello.txt', newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Done!');
					})
			})
						
			} else {
				msg = host + " " + "не уя не успешный";
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


}

myPing();
setInterval(myPing , 3600000);