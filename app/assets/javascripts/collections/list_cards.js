TrelloClone.Collections.ListCards = Backbone.Collection.extend({
    model: TrelloClone.Models.Card,

    initialize: function (models, options) {
        this.list = options.list;
    }, 

    // comparator: 
});