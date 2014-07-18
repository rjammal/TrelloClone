TrelloClone.Routers.TrelloRouter = Backbone.Router.extend({
    
    initialize: function (options) {
        this.$rootEl = options.$rootEl;
    },

    routes: {
        "": "boardsIndex", 
        "boards/:id": "boardsShow"
    }, 

    boardsIndex: function () {
        alert("index");
    }, 

    boardsShow: function (id) {
        alert("show" + id);
    },

    _swapView: function (view) {
        this.currentView && this.currentView.remove();
        this.$rootEl.html(view.$el);
        this.currentView = view;
    }
});