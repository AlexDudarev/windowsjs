var app = app || {};

(function() {
	// Windows Collection
	// ---------------

	var WindowList = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: app.Window
	});

	// Create our global collection of **Windows**.
	app.Windows = new WindowList();

}());
