
	Modernizr.load({
		test: Modernizr.geolocation,
		yep : 'geo.js',
		nope: 'geo-polyfill.js'
	});

	Modernizr.load([
		// Presentational polyfills
		{
			// Logical list of things we would normally need
			test : Modernizr.fontface && Modernizr.canvas && Modernizr.cssgradients,
			
			// Modernizr.load loads css and javascript by default
			nope : ['presentational-polyfill.js', 'presentational.css']
		},

		// Functional polyfills
		{
			// This just has to be truthy
			test : Modernizr.websockets && window.JSON,

			// socket-io.js and json2.js
			nope : 'functional-polyfills.js',
			
			// You can also give arrays of resources to load.
			both : [ 'app.js', 'extra.js' ],
			
			complete : function () {
				// Run this after everything in this group has downloaded
				// and executed, as well everything in all previous groups
				myApp.init();
			}
		},
		
		// Run your analytics after you've already kicked off all the rest of your app.
		'post-analytics.js'
	]);
