var CardView = Backbone.View.extend({

    tagName: "div",

    className: "card",

    attributes: function(){
        return {
            id: "card" + this.model.get('id'),
        }
    },

    events: {
    },

    initialize: function() {
        this.listenTo(this.model, "change", this.render);
        //this.makeDraggable();
    },

    dragMoveListener: function(event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    //target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
},

    makeDraggable : function () {
        var self = this;
        interact("#" + this.attributes().id)
            .draggable({
                // enable inertial throwing
                inertia: false,
                // keep the element within the area of it's parent
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true
                    })
                ],
                // enable autoScroll
                autoScroll: true,

                // call this function on every dragmove event
                onmove: self.dragMoveListener,
                // call this function on every dragend event
                onend: function (event) {
                    var textEl = event.target.querySelector('p');

                    textEl && (textEl.textContent =
                        'moved a distance of ' +
                        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                            Math.pow(event.pageY - event.y0, 2) | 0))
                            .toFixed(2) + 'px');

                    // Update the position on the server
                    let offset = $(event.target).offset();
                    let data = {
                        top: offset.top,
                        left: offset.left,
                        id: $(event.target).attr("data-card-id"),
                        text: $(event.target).html()
                    };
                    $.post("/cards/update_position", data, function (success) {
                    });
                }
            });

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