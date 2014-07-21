TrelloClone.Views.CardShowItem = Backbone.View.extend({

    tagName: "li", 

    className: "col-xs-12 list-group-item ui-state-default",

    template: JST["card_show_item"], 

    render: function () {
        var renderedContent = this.template({ card: this.model });
        this.$el.html(renderedContent);
        return this;
    }
});