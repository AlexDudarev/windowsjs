var app = app || {};

$(function() {
	// Window View
	// --------------

	// The DOM element for a windows...
	app.WindowView = Backbone.View.extend({

		//... is a list tag.
		tagName:  'div',

        className : 'window active-window',

		// Cache the template function for a single item.
		template: _.template( $('#window-template').html() ),

        statusTemplate: _.template( $('#status-bar-window-template').html() ),

		// The DOM events specific to an item.
		events: {
                        'dblclick .title' :             'maximize',            
			'click .minimize-button':	    'minimize',
			'click .maximize-button':	    'maximize',
			'click .close-window-button':	'close'
		},

		initialize: function() {
		},

		// Re-render the titles of the todo item.
		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
            $('#status-bar-applications').append( this.statusTemplate( this.model.toJSON() ) );
			return this;
		},

        minimize : function(){
           this.$el.removeClass("maximize");
           this.$el.addClass("minimize");
        },

        maximize: function(){
           this.$el.removeClass("minimize");
           this.$el.toggleClass("maximize");
        },

        close: function(){
            // remove window from status-bar
            $('#status-bar-applications').find(".application-button[data-windowid="+ $(this.$el).find(".content").data("windowid") +"]")[0].remove();
            //remove window
            this.remove();
        }
    });
});
