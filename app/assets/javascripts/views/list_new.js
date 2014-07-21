TrelloClone.Views.ListNew = Backbone.FormView.extend({

    events: {
        "click #save-list": "saveList"
    },

    template: JST["list_new"], 

    render: function () {
        var renderedContent = this.template();
        this.$el.html(renderedContent);
        return this;
    },

    saveList: function (event) {
        event.preventDefault();
        var formData = $('form').serializeJSON();
        var newListView = this;
        var list = new TrelloClone.Models.List(formData);
        list.set("board_id", this.model.get("id"));
        list.save( formData, {
            success: function () {
                newListView.model.lists().add(list);
                newListView.render();
            }, 
            error: this.addErrorsFn()
        });
    }
});