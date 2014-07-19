TrelloClone.Views.BoardIndex = Backbone.CompositeView.extend({
    
    initialize: function () {
        this.listenTo(this.collection, "sync", this.render)
    },

    template: JST["board_index"], 

    render: function () {
        var renderedContent = this.template({ boards: this.collection });
        this.$el.html(renderedContent);

        var board = new TrelloClone.Models.Board();
        this.addSubview("#create-new-board", new TrelloClone.Views.BoardNew({ model: board }))
        
        return this;
    }
});