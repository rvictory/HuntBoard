var CardView = Backbone.View.extend({

    tagName: "div",

    className: "card",

    events: {
    },

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
    },

    template: _.template("<%= text %>"),

    render: function() {
        this.$el.html('');
        this.$el.html(this.template(this.model.attributes));
        this.$el.attr('data-card-id', this.model.get('id'));
        this.$el.offset({ top: this.model.get('top'), left: this.model.get('left') });
        return this;
    }

});