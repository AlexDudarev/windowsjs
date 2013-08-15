var app = app || {};

$(function(){
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    app.guid = function guid() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };


    // config for main menu
    app.mainMenu = [{
      title : "Window 1",
      objectName : "ControllerWindow1",
      windowId : app.guid()
    },{
        title : "Window 2",
        objectName : "ControllerWindow2",
        windowId : app.guid()
    }];
});
