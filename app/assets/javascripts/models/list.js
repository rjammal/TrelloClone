TrelloClone.Models.List = Backbone.Model.extend({

    urlRoot: function () {
        return "api/boards/" + this.get('board_id') + "/lists"
    } 

});