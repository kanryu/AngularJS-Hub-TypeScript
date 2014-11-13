/// <reference path="../typings/tsd.d.ts" />

angular.module("hashbangModule", ["mainModule"])
  .config(function ($locationProvider)
  {
//    $locationProvider.html5Mode({enabled:true, requireBase:false}).hashPrefix("!");
    $locationProvider.html5Mode({enabled:false, requireBase:false}).hashPrefix("!");
  });