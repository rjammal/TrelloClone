TrelloClone.Views.ListShowItem = Backbone.CompositeView.extend({

    initialize: function (options) {
        this.listenTo(this.model.cards(), "add", this.addCard);
        // populate existing cards
        this.model.cards().each(this.addCard.bind(this));

        var newCardView = new TrelloClone.Views.CardNew({ model: this.model })
        this.addSubview("#new-card-form", newCardView);
    }, 

    events: {
        "click .delete": "deleteList", 
        "sortupdate .cards": "setCardOrd"
    },

    template: JST["list_show_item"], 

    tagName: "li", 

    className: "col-xs-2 list-group-item ui-state-default list-item",

    attributes: function () {
        return {
            "data-list-id": this.model.get("id")
        };
    },

    render: function () {
        var renderedContent = this.template({ list: this.model });
        this.$el.html(renderedContent);
        this.attachSubviews();

        //ensure this code runs after element is on page by setting timeout
        var view = this;
        setTimeout( 
            function () {
                view.$(".cards").sortable({
                    connectWith: ".cards" 
                })}, 
            0);
        return this;
    }, 

    deleteList: function (event) {
        this.model.destroy();
        this.remove();
    },

    setCardOrd: function (event, ui) {
        var $cards = this.$('.cards').children();
        $cards.each( function (index) {
            var card = new TrelloClone.Models.Card({ 
                id: $(this).data("card-id"), 
                ord: index
            });
            card.save();
        });
    },

    addCard: function (card) {
        var cardShowView = new TrelloClone.Views.CardShowItem({ 
            model: card
        })
        this.addSubview(".cards", cardShowView);
    }
});