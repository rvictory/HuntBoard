//import * as Backbone from "../frameworks/backbone-min";

var Card= Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        "_id":  null,
        "top" : 0,
        "left" : 0,
        "text" : ""
    }
});