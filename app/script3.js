/// <reference path="../typings/tsd.d.ts" />
var myApp = angular.module('myApp', []);
myApp.controller('simpleController', ['$scope', function ($scope) {
    // Initialize the model variables
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
}]);
