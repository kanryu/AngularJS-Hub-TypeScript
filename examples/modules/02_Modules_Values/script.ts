/// <reference path="../typings/tsd.d.ts" />

var mainModule:ng.IModule = angular.module('mainModule',[]);

// Register an object instance as a value and name it "person"
mainModule.value("person", {
  firstName: "",
  lastName: "",

  getFullName: function ()
  {
    return this.firstName + " " + this.lastName;
  }
})
// Get the "person" registered object instance through Dependency Injection
.controller("mainController", function ($scope, person)
{
  person.firstName = "John";
  person.lastName = "Doe";

  // Set a variable on the scope to reference the "person" instance
  // from the HTML template.
  $scope.personInstance = person;
});
