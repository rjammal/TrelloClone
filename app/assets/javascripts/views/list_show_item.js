TrelloClone.Views.ListShowItem = Backbone.CompositeView.extend({

    initialize: function (options) {
        this.listenTo(this.model.cards(), "add", this.addCard);
        // populate existing cards
        this.model.cards().each(this.addCard.bind(this));

        var newCardView = new TrelloClone.Views.CardNew({ model: this.model })
        this.addSubview("#new-card-form", newCardView);
    }, 

    events: {
        "click .delete": "deleteList"
    },

    template: JST["list_show_item"], 

    tagName: "li", 

    className: "col-xs-2 list-group-item ui-state-default lists",

    render: function () {
        var renderedContent = this.template({ list: this.model });
        this.$el.html(renderedContent);
        this.attachSubviews();
        return this;
    }, 

    deleteList: function (event) {
        this.model.destroy();
        this.remove();
    },

    addCard: function (card) {
        var cardShowView = new TrelloClone.Views.CardShowItem({ 
            model: card
        })
        this.addSubview(".cards", cardShowView);
    }
});