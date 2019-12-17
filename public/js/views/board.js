var BoardView = Backbone.View.extend({

    tagName: "div",

    className: "col-md-12",

    events: {
    },

    initialize: function() {
        //this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "add", this.addModel);
    },

    addModel : function (newModel) {
        let newView = new CardView({model: newModel});
        this.$el.append(newView.render().$el);
        // TODO: This seems to be the only way to do this right now, elements can only be
        //       be made draggable once they are in the DOM proper. Is there a better way?
        newView.makeDraggable();
    },

    removeModel : function () {

    },

    render: function() {
        this.$el.css('height', '100%');
        return this;
    }

});