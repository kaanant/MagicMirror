/* global Log, Module, moment */

/* Magic Mirror
 * Module: Compliments
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */
Module.register("buttons", {

	// Module config defaults.
	defaults: {
		text: "Go to GOOGLE"
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["buttons.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);
	},

	/* randomIndex(compliments)
	 * Generate a random index for a list of compliments.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */

	// Override dom generator.
	getDom: function() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = "<a href=https://www.google.com><img src='/fonts/icons/google-icon.png' width='60' height='60'></a><a href=https://mail.google.com/><img src='/fonts/icons/gmail-icon.png' style='margin-left:15px' width='60' height='60'></a><a href=https://www.facebook.com/><img src='/fonts/icons/facebook-icon.png' style='margin-left:5px' width='70' height='60'></a>" ;

    	return wrapper;
	},


});
