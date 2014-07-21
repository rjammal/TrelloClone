TrelloClone.Views.CardShowItem = Backbone.View.extend({

    tagName: "li", 

    className: "col-xs-12 list-group-item",

    template: JST["card_show_item"], 

    events: {
        "click .delete": "deleteCard"
    },

    render: function () {
        var renderedContent = this.template({ card: this.model });
        this.$el.html(renderedContent);
        return this;
    }, 

    deleteCard: function(event) {
        event.preventDefault();
        this.model.destroy();
        this.remove();
    }
});