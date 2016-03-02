angular.module('items', [
    'items.create',
    'items.edit',
    'todoApp.models.items'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('todoApp.items', {
                url: '/',
                views: {
                    'items@': {
                        controller: 'ItemsCtrl as itemsCtrl',
                        templateUrl: 'app/todoApp/items.tmpl.html'
                    }
                }
            });
    })
    .controller('ItemsCtrl', function ItemsCtrl(ItemsModel) {
        var itemsCtrl = this;
        itemsCtrl.items = ItemsModel.getItems();
    })
;
