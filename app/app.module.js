angular.module('app', [
    'templates',
    'ui.router',
    // 'welcome',
    'todoApp'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/todo');
    //$urlRouterProvider.otherwise('/welcome');
  })
  .run(function () {

  });
