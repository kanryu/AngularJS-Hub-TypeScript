/// <reference path="../typings/tsd.d.ts" />

var myApp:ng.IModule = angular.module('myApp',[]);


myApp.controller('firstController', ['$scope', function ($scope) {
  // Initialize the model variables
  $scope.firstName = "John";
  $scope.lastName = "Doe";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
}]);

myApp.controller('secondController', ['$scope', function ($scope) {
  // Initialize the model variables
  $scope.firstName = "Bob";
  $scope.middleName = "Al";
  $scope.lastName = "Smith";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
}]);
