TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
    
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
        "": "boardsIndex", 
        "boards/:id": "boardsShow"
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

    _swapView: function (view) {
        this.currentView && this.currentView.remove();
        this.$rootEl.html(view.$el);
        this.currentView = view.render();
    }
});