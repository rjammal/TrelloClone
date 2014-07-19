TrelloClone.Views.ListNew = Backbone.View.extend({

    events: {
        "click #save-list": "saveList"
    },

    template: JST["list_new"], 

    render: function () {
        var renderedContent = this.template({ list: this.model })
        this.$el.html(renderedContent);
        return this;
    },

    saveList: function (event) {
        event.preventDefault();
        var formData = $('form').serializeJSON();
        var newListView = this;
        this.model.save( formData, {
            success: function () {
                var boardID = newListView.model.get("board_id");
                var board = TrelloClone.boards.getOrFetch(boardID)
                board.lists().add(newListView.model);
                newListView.model = new TrelloClone.Models.List({ board_id: boardID })
                newListView.$('form').find("input").val("");
                newListView.$('.errors').empty();
            }, 
            error: function (model, response) {
                var htmlResponse = "<ul>";
                htmlResponse += response.responseJSON.map(function (error) {
                    return "<li>" + error + "</li>";
                }).join("");
                htmlResponse += "</ul>";
                newListView.$(".errors").html(htmlResponse);
            }
        });
    }
});