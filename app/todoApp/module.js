angular.module('todoApp', [
    'items'
]);

angular.module('todoApp')
  .controller('mainCtrl', mainCtrl)
  .config($stateProvider => {
      $stateProvider
        .state('todo', {
          url: '/todo',
          controller: 'ItemsCtrl as itemsCtrl',
          templateUrl: 'todoApp/items.tmpl.html',
        //   templateUrl: 'todoApp/todo.html',
          controllerAs: 'todo'
        });
  });

  function mainCtrl($scope, $http) {
      //CRUD
      function resetAddItem() {
          $scope.newItem = {
              name: ''
          };
      }//end resetAddItem

      $scope.addItem = function(item)
      {
          // item.id = $scope.items.length;
          item.id = $scope.items.length;
          $scope.items.push(item);

          resetAddItem();
      };//end scope.addItem

      $scope.editedItem = null;

      $scope.setEditedItem = function(item) {
          $scope.editedItem = angular.copy(item);
      };//end scope.setEditedItem

      $scope.updateItem = function(item) {
          var idx = _.findIndex($scope.items, function(b) {
              return b.id == item.id;
          });
          $scope.items[idx] = item;

          $scope.editedItem = null;
      };//end scope.updateItem

      $scope.selectedItem = function(itemId) {
          return $scope.editedItem !== null && $scope.editedItem.id === itemId;
      };//end scope.selectedItem

      $scope.deleteItem = function(item) {
          _.remove($scope.items, function(b) {
              return b.id == item.id;
          });
      };//end scope.deleteItem
  }//end mainCtrl.controller
