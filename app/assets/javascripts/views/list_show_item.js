TrelloClone.Views.ListShowItem = Backbone.View.extend({

    initialize: function (options) {
        this.listenTo(this.model, "change", this.render);
    }, 

    template: JST["list_show_item"], 

    tagName: "li", 

    render: function () {
        var renderedContent = this.template({ list: this.model });
        this.$el.html(renderedContent);
        return this;
    }
});