TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
    
    initialize: function (options) {
        this.listenTo(this.model, "sync", this.render);
        this.listenTo(this.model.lists(), "add", this.addList);
        var boardView = this;
        this.model.fetch();

        var listNewView = new TrelloClone.Views.ListNew({ 
            model: new TrelloClone.Models.List({ board_id: this.model.get('id') })
        })
        this.addSubview("div#create-new-list", listNewView)
    },

    events: {
        "click #render-button": "render"
    },

    template: JST["board_show"], 

    render: function () {
        var renderedContent = this.template({ board: this.model });
        this.$el.html(renderedContent);
        this.attachSubviews();

        return this;
    }, 

    addList: function (list) {
        var listShowView = new TrelloClone.Views.ListShowItem({ model: list })
        this.addSubview("ul#lists", listShowView);
        

    },

});