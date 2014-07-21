TrelloClone.Models.List = Backbone.Model.extend({

    urlRoot: "api/lists", 

    cards: function () {
        if (!this._cards) {
            this._cards = new TrelloClone.Collections.ListCards([], { list: this })
        }

        return this._cards;
    }, 

    parse: function(response) {
        // debugger
        if (response.cards) {
            this.cards().set(response.cards, { parse: true });
            delete response["cards"];
        }

        return response;
    }

});