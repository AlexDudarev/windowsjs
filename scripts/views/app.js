var app = app || {};

$(function( $ ) {
	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#windowsapp',

        tagName: "div",

		// Our template for the line of statistics at the bottom of the app.
		statsTemplate: _.template( $('#taskbar-template').html() ),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'click .addwindow': 'createWindow',
            'click .win-button': 'toggleMenu',
            'click .application-button' : 'pressStatusBar',
            'mouseleave #taskbar' : 'leaveMenu'
        },

		initialize: function() {
            this.listenTo(app.Windows, 'add', this.addOne);
            this.$taskbar = this.$('#taskbar');

            this.render();
			//app.Windows.fetch();
		},

		render: function() {
            /*this.$taskbar.show();*/
            this.$taskbar.html(this.statsTemplate({mainMenu :app.mainMenu}));
		},

        addOne: function( window ) {
            var view = new app.WindowView({ model: window });
            var newWindow = $(view.render().el).appendTo('#mainscreen');
            window.workObject ? window.workObject.loaded(newWindow) : "";
            app.windowWidget(newWindow);
        },

    	newAttributes: function(e) {
			return {
				title: $(e.target).data("title"),
                windowId: $(e.target).data("windowid"),
                objectName: $(e.target).data("objectname")
			};
		},

        createWindow: function( e ) {
            this.leaveMenu();
            $('.application-button').removeClass("active");
			app.Windows.add( this.newAttributes(e) );
		},

        leaveMenu : function(){
            $('#taskbar').hide();
        },

        toggleMenu: function(){
            $('#taskbar').toggle();
        },

        pressStatusBar: function(e){
           var guid = $(e.target).data("windowid");
            app.windowWidget.activateWindow($(".content[data-windowid=" +guid + "]").parent(),"disable");
        }
	});
});
