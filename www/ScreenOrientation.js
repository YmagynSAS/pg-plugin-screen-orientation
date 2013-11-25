var ScreenOrientation = function() {}

ScreenOrientation.prototype.set = function(str, success, fail) {
	cordova.exec(null, null, "ScreenOrientation", "set", [str]);
};
cordova.addConstructor(function()  {
	   if(!window.plugins)
	   {
	   window.plugins = {};
	   }		   
	   if (!window.Cordova) {
	   window.Cordova = cordova;
	   };
	   
	   window.plugins.screenorientation = new ScreenOrientation();
});
