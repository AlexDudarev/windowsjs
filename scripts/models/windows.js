var app = app || {};

(function() {
	// Window Model
	// ----------

	// Our basic **Window** model has `title` and `windowId` attributes.
	app.Window = Backbone.Model.extend({

		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
            windowId : '',
            objectName : ''
		},

        constructor: function(){
            Backbone.Model.apply(this, arguments);
            this.workObject = app[arguments[0].objectName] ? new app[arguments[0].objectName]() : null;
        },

        workObject : null


	});

}());
