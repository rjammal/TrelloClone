TrelloClone.Views.CardShowItem = Backbone.View.extend({

    tagName: "li", 

    template: JST["card_show_item"], 

    render: function () {
        var renderedContent = this.template({ card: this.model });
        this.$el.html(renderedContent);
        return this;
    }
});