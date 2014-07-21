TrelloClone.Views.CardNew = Backbone.FormView.extend({
    
    template: JST["card_new"], 

    render: function () {
        var renderedContent = this.template();
        return this;
    }, 

    saveCard: function (event) {
        event.preventDefault();

        var formData = $("#new-card").serializeJSON();
        var card = new TrelloClone.Models.Card(formData);
        var cardNewView = this;
        card.set("list_id", this.model.get("id"));
        card.save({
            success: function () {
                cardNewView.model.cards().add(card);
                cardNewView.render();
            }, 
            error: this.addErrorsFn()
        });
    }
})