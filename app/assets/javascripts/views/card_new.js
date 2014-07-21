TrelloClone.Views.CardNew = Backbone.FormView.extend({
    
    template: JST["card_new"], 

    events: {
        "click .save-card": "saveCard"
    },

    render: function () {
        var renderedContent = this.template();
        this.$el.html(renderedContent);
        return this;
    }, 

    saveCard: function (event) {
        event.preventDefault();

        var formData = this.$(".new-card").serializeJSON();
        var card = new TrelloClone.Models.Card(formData);
        var cardNewView = this;
        card.set("list_id", this.model.get("id"));
        card.save(formData, {
            success: function () {
                cardNewView.model.cards().add(card);
                cardNewView.render();
            }, 
            error: this.addErrorsFn()
        });
    }
})