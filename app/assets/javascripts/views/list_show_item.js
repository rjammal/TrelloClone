TrelloClone.Views.ListShowItem = Backbone.CompositeView.extend({

    initialize: function (options) {
        this.listenTo(this.model, "change sync", this.render);
    }, 

    events: {
        "click .delete": "deleteList"
    },

    template: JST["list_show_item"], 

    tagName: "li", 

    render: function () {
        var renderedContent = this.template({ list: this.model });
        this.$el.html(renderedContent);

        //attach new view
        var newCardView = new TrelloClone.Views.CardNew({ model: this.model })
        this.$("#new-card-form")
        return this;
    }, 

    deleteList: function (event) {
        this.model.destroy();
        this.remove();
    }
});