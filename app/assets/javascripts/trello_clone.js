window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards.fetch();
    
    new TrelloClone.Routers.TrelloRouter({$rootEl: $('#main')});
    Backbone.history.start();
  }
};


