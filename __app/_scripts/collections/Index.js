define([
	'jquery',
	'backbone',
	'underscore'
], function ($, Backbone, __, Hand){

	var Index = Backbone.Collection.extend({
		el: 'body',

		initialize: function() {
			console.log('Index Collection Triggered');
		}
	});

	return Index;
});