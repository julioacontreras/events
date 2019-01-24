define(["underscore", "backbone"], function(_,Backbone) {
    if(!window.events){
        window.events = {};
        _.extend(window.events, Backbone.Events);
    }

    return {
        listenTo(id, func){
            window.events.on(id, func);
        },
        trigger(id, data){
            window.events.trigger(id, data);
        },
        remove(id){
            window.events.off(id);
        },
        createId(){
            return new Date().valueOf();
        }
    };
});
