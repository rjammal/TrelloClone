TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
    
    initialize: function (options) {
        this.listenTo(this.model, "sync", this.render);
        this.listenTo(this.model.lists(), "add", this.addList);
        var listNewView = new TrelloClone.Views.ListNew({ 
            model: this.model
        })
        this.addSubview("div#create-new-list", listNewView)

        this.model.fetch();
    },

    template: JST["board_show"], 

    events: {
        "sortupdate #lists": "updateListOrd"
    },

    render: function () {
        var renderedContent = this.template({ board: this.model });
        this.$el.html(renderedContent);
        this.attachSubviews();

        // ensure sortable happens after element is on the page
        setTimeout(
            function () {
                $('#lists').sortable();
            }, 
            0);

        return this;
    },

    updateListOrd: function (event, ui) {
        var $lists = this.$('#lists').children();
        $lists.each( function (index) {
            var list = new TrelloClone.Models.List({ 
                id: $(this).data("list-id"), 
                ord: index
            });
            list.save();
        });
    },

    addList: function (list) {
        var listShowView = new TrelloClone.Views.ListShowItem({ 
            model: list, 
            collection: list.cards()
        })
        this.addSubview("ul#lists", listShowView);
    }

});