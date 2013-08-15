var app = app || {};
var ENTER_KEY = 13;

$(function() {

    app.windowWidget = function(window){

        window.draggable();

        window.find('.title').mousedown(function(){
            app.windowWidget.activateWindow(window,"enable");
        });

        window.find('.content').mousedown(function(){
            app.windowWidget.activateWindow(window,"disable");
        }).mouseup(function(){
                window.draggable("enable");
            });

        $('.window').mouseup(function(){
        });
    }

    app.windowWidget.activateWindow = function(window,dragEnable){
        $('.window').removeClass('active-window');
        window.addClass('active-window');
        var guid = window.find(".content").data("windowid");
        $('.application-button').removeClass("active");
        $('.application-button[data-windowid='+ guid +']').addClass("active");
        window.draggable(dragEnable);
    }

	// Kick things off by creating the **App**.
	new app.AppView();

});
