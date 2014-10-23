/// <reference path="../typings/tsd.d.ts" />

class Person {
  public firstName:string;
  public lastName:string;
  public age:number;
  constructor(pe:any) {
    this.firstName = pe.firstName;
    this.lastName = pe.lastName;
    this.age = pe.age;
  }
}

var mainModule:ng.IModule = angular.module('mainModule',[]);

mainModule.controller("mainController", function ($scope, $filter, dateFilter:Function)
  {
    // Initialization
    $scope.people = [
      new Person({firstName: "John", lastName: "Doe", age: 30}),
      new Person({firstName: "Bob", lastName: "Smith", age: 26}),
      new Person({firstName: "Jack", lastName: "White", age: 47}),
      new Person({firstName: "Michael", lastName: "Green", age: 41})
    ];

    // Utility functions
    $scope.customArrayFilter = function (item:Person) {
      return (item.lastName.indexOf('it') != -1 && item.age >= 40);
    };
  });