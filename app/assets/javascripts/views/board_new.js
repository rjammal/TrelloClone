TrelloClone.Views.BoardNew = Backbone.View.extend({

    initialize: function () {
        this.board = new TrelloClone.Models.Board();
    },

    events: {
        "click #save-board": "saveBoard"
    }, 

    template: JST["board_new"], 

    render: function () {
        var renderedContent = this.template({ board: this.board });
        this.$el.html(renderedContent);
        return this;
    }, 

    saveBoard: function (event) {
        event.preventDefault();
        var formData = $('form').serializeJSON();
        var board = this.board;
        this.board.save(formData, {
            success: function () {
                TrelloClone.boards.add(board);
                Backbone.history.navigate("#", {trigger: true}); 
            }
        });
    }

});