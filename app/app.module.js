angular.module('app', [
        'templates',
        'ui.router',
        // 'welcome',
        'todoApp'
    ])
    .config(function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('todoApp', {
                url: '',
                abstract: true
            });
        $urlRouterProvider.otherwise('/todo');
        //$urlRouterProvider.otherwise('/welcome');
    })
    .run(function() {

    });
