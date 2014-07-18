TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
    
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
        "": "boardsIndex", 
        "boards/new": "boardsNew",
        "boards/:id": "boardsShow", 
        "lists/:id": "listShow"
    }, 

    boardsIndex: function () {
        var indexView = new TrelloClone.Views.BoardIndex({
            collection: TrelloClone.boards
        });
        this._swapView(indexView);
    }, 

    boardsShow: function (id) {
        var showView = new TrelloClone.Views.BoardShow({
            model: new TrelloClone.Models.Board({id: id})
        });
        this._swapView(showView);
    },

    boardsNew: function () {
        var newView = new TrelloClone.Views.BoardNew();
        this._swapView(newView);
    },

    listShow: function (id) {
        alert("list show " + id);
    },

    _swapView: function (view) {
        this.currentView && this.currentView.remove();
        this.$rootEl.html(view.$el);
        this.currentView = view.render();
    }
});