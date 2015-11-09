angular.module('myApp').controller('mainController', function ($scope, mainService) {

  $scope.getResults = function (searchTerm) {
    mainService.getData(searchTerm).then(function (res) {
      $scope.results = res;
      $scope.searchTerm = '';
    });
  };

});