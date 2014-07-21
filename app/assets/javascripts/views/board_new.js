TrelloClone.Views.BoardNew = Backbone.FormView.extend({

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
        var newView = this;
        this.board.save(formData, {
            success: function () {
                TrelloClone.boards.add(newView.board);
                newView.model = new TrelloClone.Models.Board();
                newView.$(".errors").empty();
            }, 
            error: this.addErrorsFn()
        });
    }

});