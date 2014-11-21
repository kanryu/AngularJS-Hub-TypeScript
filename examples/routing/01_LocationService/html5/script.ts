/// <reference path="../../../../typings/tsd.d.ts" />

angular.module("html5Module", ["mainModule"])
  .config(function ($locationProvider)
  {
console.log($locationProvider);
    $locationProvider.html5Mode({enabled:true, requireBase:false}).hashPrefix("!");
  });