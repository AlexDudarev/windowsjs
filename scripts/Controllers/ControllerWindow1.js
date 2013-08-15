var app = app || {};

(function() {
    // Windows Collection
    // ---------------
    // TODO: need create base controller!
    app.ControllerWindow1 = function(){
        var that = this;

        this.loaded = function(window){
            that.window = window;
            window.find(".content").html("loaded");
        }
    }
}());
