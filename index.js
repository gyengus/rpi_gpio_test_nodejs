var gpio = require("./rpi-gpio.js");
var PIN = 22;

gpio.setup(PIN, gpio.DIR_OUT, function() {
    gpio.write(PIN, false, function(err) {
	if (err) {
	    console.log(err);
	    process.exit();
	} else {
	    console.log("OK");
	    process.exit(); 
	}
    });
});
