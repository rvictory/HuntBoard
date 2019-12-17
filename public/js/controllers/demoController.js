var cards = new Cards();
cards.fetch();

let boardView = new BoardView({model: cards});
$('#board').append(boardView.render().$el);

// TODO: Create a new controller for handling this instead of right here
var es = new EventSource('/card_stream');
es.onmessage = function(e) {
    let data = JSON.parse(e.data);
    cards.get(data.id).set(data);
    //renderCard(JSON.parse(e.data));
};