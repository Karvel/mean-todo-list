angular.module('todoApp', []);

angular.module('todoApp')
  .controller('itemCtrl', itemCtrl)
  .config($stateProvider => {
      $stateProvider
        .state('todo', {
          url: '/todo',
          controller: 'itemCtrl',
          templateUrl: 'todoApp/todo.html',
          controllerAs: 'todo'
        });
  });

  function itemCtrl($scope, $http) {
      $scope.items = [
          {id: "0", name: "First"},
          {id: "1", name: "Second"},
          {id: "2", name: "Third"}
      ];//end scope.items

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
  }//end itemCtrl.controller
//
// function WelcomeCtrl() {
//   this.message = 'Bitwise Says Hello.';
// }
