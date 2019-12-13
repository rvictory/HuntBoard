// target elements with the "draggable" class
interact('.card')
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
        onmove: dragMoveListener,
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
                _id: $(event.target).attr("data-card-id"),
                text: $(event.target).html()
            };
            $.post("/cards/update_position", data, function (success) {
            });
        }
    });

function dragMoveListener (event) {
    var target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
//window.dragMoveListener = dragMoveListener;

const renderCard = function(card) {
    $('#card_' + card._id).remove();
    let cardHTML = $("<div class='card' id='card_" + card._id + "'></div>");
    $(cardHTML).append(card.text);
    $(cardHTML).attr("data-card-id", card._id);
    $("#board").append(cardHTML);
    $(cardHTML).offset({ top: card.top, left: card.left });
};

$.get("/cards", function (cards) {
    cards.forEach(function (card) {
       renderCard(card);
    });
});

// reading
var es = new EventSource('/card_stream');
es.onmessage = function(e) {
    //$('#chat').append(e.data + "\n")
    renderCard(JSON.parse(e.data));
};