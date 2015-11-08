angular.module('myApp').controller('mainController', function ($scope, mainService) {
  $scope.test = 'TEST';

  $scope.getResults = function (searchTerm) {
    mainService.getData(searchTerm).then(function (res) {
      $scope.results = res;
    });
  };

});