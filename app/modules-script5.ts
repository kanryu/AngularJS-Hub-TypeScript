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

class PersonManagerProvider {
  personManager:PersonManager;
  $get(person):PersonManager {
    if(!this.personManager) {
      this.personManager = new PersonManager(person);
    }
    return this.personManager;
  }
}


//// Definition of a PersonManager object
//var PersonManager = function (person)
//{
//  // Private variables
//  var personInstance = person;
//
//  return {
//    getPersonFirstName: function ()
//    {
//      return personInstance.firstName;
//    },
//    getPersonLastName: function ()
//    {
//      return personInstance.lastName;
//    },
//    getPersonFullName: function (separator)
//    {
//      return personInstance.firstName + separator + personInstance.lastName;
//    }
//  };
//};

// Initialization of the "mainModule"
var mainModule:ng.IModule = angular.module('mainModule',[]);

  // Register an object instance as a value and name it "person"
  mainModule.value("person", {
    firstName: "",
    lastName: ""
  })
  // Register a provider with person management functions and name it "personManager".
  // This provider requires the "person" object instance registered as a value in the
  // "mainModule" and that instance is passed to the constructor through Dependency Injection
  // simply writing "person" (the name of the registered value) as parameter name.
  .provider("personManager", new PersonManagerProvider())
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

    // Set variables on the scope to reference the "person" object instance
    // and the "personManager" service from the HTML template.
    $scope.personInstance = person;
    $scope.personManagerInstance = personManager;
  });


