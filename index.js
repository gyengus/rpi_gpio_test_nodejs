var gpio = require('rpi-gpio');
var PIN = 22; // RED LED
var BTN = 16; // Button

function redledoff() {
    gpio.write(PIN, false, function(err) {
	if (err) {
	    console.log(err);
	} else {
	    console.log('RED LED Off');
	}
    });
} // redledoff

// Read button state
gpio.setup(BTN, gpio.DIR_IN, function() {
    gpio.read(BTN, function(err, value) {
	if (err) {
	    console.log(err);
	} else {
	    console.log('Button state: ' + value);
	}
    });
});

// Set RED LED on for 5 secs
gpio.setup(PIN, gpio.DIR_OUT, function() {
    gpio.write(PIN, true, function(err) {
	if (err) {
	    console.log(err);
	} else {
	    console.log('RED LED On');
	    setTimeout(redledoff, 5000);
	}
    });
});

// Close all pins and exit
setTimeout(function() {
    gpio.destroy(function() {
	console.log('All pins closed... bye');
	process.exit();
    });
}, 10000);
