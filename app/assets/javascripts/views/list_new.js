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
        var list = this.model;
        this.model.save( formData, {
            success: function () {
                var boardID = list.get("board_id");
                var board = TrelloClone.boards.getOrFetch(boardID)
                board.lists().add(list);
                Backbone.history.navigate("#boards/" + boardID, {trigger: true});
            }
        });
    }
});