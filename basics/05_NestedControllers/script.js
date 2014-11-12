/// <reference path="../typings/tsd.d.ts" />
var myApp = angular.module('myApp', []);
myApp.controller('firstControllerScope', ['$scope', function ($scope) {
    // Initialize the model variables
    $scope.firstName = "John";
}]);
myApp.controller('secondControllerScope', ['$scope', function ($scope) {
    // Initialize the model variables
    $scope.lastName = "Doe";
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
}]);
myApp.controller('thirdControllerScope', ['$scope', function ($scope) {
    // Initialize the model variables
    $scope.middleName = "Al";
    $scope.lastName = "Smith";
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
    };
}]);
myApp.controller('firstControllerObj', ['$scope', function ($scope) {
    // Initialize the model object
    $scope.firstModelObj = {
        firstName: "John"
    };
}]);
myApp.controller('secondControllerObj', ['$scope', function ($scope) {
    // Initialize the model object
    $scope.secondModelObj = {
        lastName: "Doe"
    };
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " + $scope.secondModelObj.lastName;
    };
}]);
myApp.controller('thirdControllerObj', ['$scope', function ($scope) {
    // Initialize the model object
    $scope.thirdModelObj = {
        middleName: "Al",
        lastName: "Smith"
    };
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstModelObj.firstName + " " + $scope.thirdModelObj.middleName + " " + $scope.thirdModelObj.lastName;
    };
}]);
