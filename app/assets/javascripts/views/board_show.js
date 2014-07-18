TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
    
    initialize: function (options) {
        this.listenTo(this.model, "change sync", this.render);
        this.model.fetch();
    },

    template: JST["board_show"], 

    render: function () {
        var renderedContent = this.template({ board: this.model });
        this.$el.html(renderedContent);

        return this;
    }
});