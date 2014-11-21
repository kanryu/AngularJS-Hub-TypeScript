/// <reference path="../../../typings/tsd.d.ts" />

class Person {
  public firstName:string;
  public lastName:string;
  public sex:string;
  public id:string;
  constructor(pe:any) {
    this.firstName = pe.firstName;
    this.lastName = pe.lastName;
    this.sex = pe.sex;
    this.id = pe.id;
  }
}

// Initialization of the "mainModule"
var mainModule:ng.IModule = angular.module('mainModule',[]);

mainModule.controller("mainController", function ($scope)
  {
    $scope.colorsArray = ["Red", "Green", "Blue"];

    $scope.peopleArray = [
      new Person({id: "1", firstName: "John", lastName: "Doe", sex: "M"}),
      new Person({id: "2", firstName: "Alice", lastName: "White", sex: "F"}),
      new Person({id: "3", firstName: "Michael", lastName: "Green", sex: "M"})
    ];

    $scope.colorsObject = {
      "R": "Red",
      "G": "Green",
      "B": "Blue"
    };

    $scope.peopleObject = {
      "1": new Person({firstName: "John", lastName: "Doe", sex: "M"}),
      "2": new Person({firstName: "Alice", lastName: "White", sex: "F"}),
      "3": new Person({firstName: "Michael", lastName: "Green", sex: "M"})
    };

    $scope.getPersonFullName = function (person:Person)
    {
      return person.firstName + " " + person.lastName;
    };

    $scope.getPersonIdAndFullName = function (person:Person)
    {
      return "(" + person.id + ") " + person.firstName + " " + person.lastName;
    };

    $scope.selectPersonById = function (id)
    {
      $scope.peopleArrayValue5 = {id: id};
    };
  });
