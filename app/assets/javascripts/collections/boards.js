TrelloClone.Collections.Boards = Backbone.Collection.extend({
    url: "api/boards", 

    model: TrelloClone.Models.Board,
});

TrelloClone.boards = new TrelloClone.Collections.Boards();