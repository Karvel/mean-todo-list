angular.module('todoApp.models.items', [])
    .service('ItemsModel', function() {
        var model = this,
            items = [
                {id: "0", name: "First"},
                {id: "1", name: "Second"},
                {id: "2", name: "Third"}
            ];//end scope.items
        model.getItems = function() {
            return items;
        };
    })//return itemsModel
;
