TrelloClone.Views.BoardShow = Backbone.View.extend({
    
    initialize: function (options) {
        this.listenTo(this.model, "change sync", this.render);
    },

    template: JST["board_show"], 

    render: function () {
        this.model.fetch();
        var renderedContent = this.template({ board: this.model });
        this.$el.html(renderedContent);
        return this;
    }
});