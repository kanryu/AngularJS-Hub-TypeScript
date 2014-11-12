/// <reference path="../typings/tsd.d.ts" />
// Initialization of the "mainModule"
var mainModule = angular.module('mainModule', []);
mainModule.controller("mainController", function ($scope) {
    $scope.person = {};
});
