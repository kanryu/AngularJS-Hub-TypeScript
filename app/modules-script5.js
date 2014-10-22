/// <reference path="../typings/tsd.d.ts" />
// Definition of a PersonManager object
var PersonManager = (function () {
    function PersonManager(person) {
        this.personInstance = person;
    }
    PersonManager.prototype.getPersonFirstName = function () {
        return this.personInstance.firstName;
    };
    PersonManager.prototype.getPersonLastName = function () {
        return this.personInstance.lastName;
    };
    PersonManager.prototype.getPersonFullName = function (separator) {
        return this.personInstance.firstName + separator + this.personInstance.lastName;
    };
    return PersonManager;
})();
var PersonManagerProvider = (function () {
    function PersonManagerProvider() {
    }
    PersonManagerProvider.prototype.$get = function (person) {
        if (!this.personManager) {
            this.personManager = new PersonManager(person);
        }
        return this.personManager;
    };
    return PersonManagerProvider;
})();
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
var mainModule = angular.module('mainModule', []);
// Register an object instance as a value and name it "person"
mainModule.value("person", {
    firstName: "",
    lastName: ""
}).provider("personManager", new PersonManagerProvider()).controller("mainController", function ($scope, person, personManager) {
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
