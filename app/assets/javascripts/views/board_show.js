TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
    
    initialize: function (options) {
        this.listenTo(this.model, "change sync", this.render);
        var board = this;
        this.model.fetch({
            success: function () {
                board.model.lists().each(function (list) {
                    var listView = 
                        new TrelloClone.Views.ListShowItem({
                            model: list
                        }).render();
                    board.addSubview("ul#lists", listView);
                    listView.delegateEvents();
                });
            }});
    },

    template: JST["board_show"], 

    render: function () {
        var renderedContent = this.template({ board: this.model });
        this.$el.html(renderedContent);
        this.attachSubviews();

        return this;
    }
});