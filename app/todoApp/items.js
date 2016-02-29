angular.module('items', [
    'items.create',
    'items.edit',
    'todoApp.models.items'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('todoApp.items', {
                url: '/todo',
                views: {
                    'items@': {
                        controller: 'itemsCtrl',
                        templateUrl: 'app/todoApp/items.tmpl.html'
                    }
                }
            });
    })
    .controller('itemsCtrl', function itemsCtrl($scope) {

    })
;
