/// <reference path="../typings/tsd.d.ts" />


// Initialization of the "mainModule"
var mainModule:ng.IModule = angular.module('mainModule',[]);

mainModule.controller("mainController", function ($scope)
  {
    $scope.person = {};
  });