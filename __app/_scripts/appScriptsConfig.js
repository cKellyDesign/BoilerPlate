require.config({

	baseUrl: 'collections',
	deps: ['require.js'],
	shim: {
		'jquery': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	},
	paths: {
		'jquery': '../../_components/jquery/jquery',
		'backbone': '../../_components/backbone/backbone',
		'underscore': '../../_components/underscore/underscore'
	}
});