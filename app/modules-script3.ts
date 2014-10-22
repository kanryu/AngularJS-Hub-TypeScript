/// <reference path="../typings/tsd.d.ts" />

// Definition of a PersonManager object
class PersonManager {
  private personInstance;
  constructor(person) {
    this.personInstance = person;
  }
  getPersonFirstName() {
    return this.personInstance.firstName;
  }
  getPersonLastName() {
  return this.personInstance.lastName;
  }
  getPersonFullName(separator) {
  return this.personInstance.firstName + separator + this.personInstance.lastName;
  }
}

// Initialization of the "mainModule"
var mainModule:ng.IModule = angular.module('mainModule',[]);

// Register an object instance as a value and name it "person"
mainModule.value("person", {
    firstName: "",
    lastName: ""
  })
  // Register a service with person management functions and name it "personManager".
  // This service requires the "person" object instance registered as a value in the
  // "mainModule" and that instance is passed to the constructor through Dependency Injection
  // simply writing "person" (the name of the registered value) as parameter name.
  .service("personManager", PersonManager)
  // Get the "person" registered object instance and the "personManager"
  // service (an instance of "PersonManager") through Dependency Injection.
  .controller("mainController", function ($scope, person, personManager)
  {
    // Initialize the values of the "person" instance registered
    // as an object in the "mainModule". This is the same instance
    // that the "personManager" service gets through Dependency Injection
    // because there's only a single instance registered with a given name.
    person.firstName = "John";
    person.lastName = "Doe";

    // Set a variable on the scope to reference the "personManager" service
    // from the HTML template.
    $scope.personManagerInstance = personManager;
  });
