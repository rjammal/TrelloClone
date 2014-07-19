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
        var newView = this;
        this.board.save(formData, {
            success: function () {
                TrelloClone.boards.add(newView.board);
                newView.model = new TrelloClone.Models.Board();
                newView.$(".errors").empty();
            }, 
            error: function (model, response) {
                var errors = response.responseJSON;
                var errorString = errors.map(function (error) {
                    return "<li>" + error + "</li>";
                }).join("");
                newView.$(".errors").html("<ul>" + errorString + "</ul>");
            }
        });
    }

});