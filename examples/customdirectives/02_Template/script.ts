/// <reference path="../../../typings/tsd.d.ts" />

var mainModule:ng.IModule = angular.module('mainModule',[]);
mainModule.controller("mainController", function ($scope)
  {
    $scope.myScopeVar = "the scope variable value";
  })
  // 1. Directive with a template specified inline
  .directive("nghTemplateJs", function ()
  {
    return {
      template: 'This is <strong>nghTemplateJs</strong> directive which generated by JavaScript Object, printing <em>{{myScopeVar}}</em>'
    };
  })
  // 2. Directive with a template loaded from a URL
  .directive("nghTemplateUrlDir", function ()
  {
    return {
      templateUrl: 'nghTemplate.html'
    };
  });