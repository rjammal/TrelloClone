Backbone.FormView = Backbone.View.extend({
    addErrorsFn: function () {
        return function (model, response) {
            var htmlResponse = "<ul>";
            htmlResponse += response.responseJSON.map(function (error) {
                return "<li>" + error + "</li>";
            }).join("");
            htmlResponse += "</ul>";
            this.$(".errors").html(htmlResponse);
        }.bind(this);
    }
})