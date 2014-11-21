/// <reference path="../../../typings/tsd.d.ts" />

// Initialization of the "mainModule"
var mainModule:ng.IModule = angular.module('mainModule',[]);

mainModule.controller("mainController", function ($scope)
  {
    // Initialization
    $scope.onKeyDownResult = "";
    $scope.onKeyUpResult = "";
    $scope.onKeyPressResult = "";

    // Utility functions

    var getKeyboardEventResult = function (keyEvent:KeyboardEvent, keyEventDesc:string):string
    {
      return keyEventDesc + " (keyCode: " + (window.event ? keyEvent.keyCode : keyEvent.which) + ")";
    };

    // Event handlers
    $scope.onKeyDown = function ($event) {
      $scope.onKeyDownResult = getKeyboardEventResult($event, "Key down");
    };

    $scope.onKeyUp = function ($event) {
      $scope.onKeyUpResult = getKeyboardEventResult($event, "Key up");
    };

    $scope.onKeyPress = function ($event) {
      $scope.onKeyPressResult = getKeyboardEventResult($event, "Key press");
    };
  });


