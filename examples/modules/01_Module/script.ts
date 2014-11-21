/// <reference path="../../../typings/tsd.d.ts" />

var mainModule:ng.IModule = angular.module('mainModule',[]);

mainModule.controller("simpleController", function ($scope)
{
  // Initialize the model
  $scope.person = {
    firstName: "John",
    lastName: "Doe",

    // Define utility functions on the model object
    getFullName: function ()
    {
      return this.firstName + " " + this.lastName;
    }
  };
});
