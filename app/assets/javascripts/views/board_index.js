TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
    
    initialize: function () {
        this.listenTo(this.collection, "sync remove", this.render)
    },

    events: {
        "click .delete": "delete"
    },

    template: JST["board_index"], 

    render: function () {
        var renderedContent = this.template({ boards: this.collection });
        this.$el.html(renderedContent);

        var board = new TrelloClone.Models.Board();
        this.addSubview("#create-new-board", new TrelloClone.Views.BoardNew({ model: board }))

        return this;
    }, 

    delete: function (event) {
        var $button = $(event.currentTarget)
        var boardID = $button.data("board-id");
        var board = this.collection.getOrFetch(boardID);
        board.destroy();
    }
});