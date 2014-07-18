TrelloClone.Collections.BoardLists = Backbone.Collection.extend({

    model: TrelloClone.Models.List,

    url: function () {
        return "api/boards/" + this.board.get('id') + "/lists";
    }, 

    initialize: function (options) {
        // this.board = options.board;
    }
    
});