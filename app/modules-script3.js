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
// Initialization of the "mainModule"
var mainModule = angular.module('mainModule', []);
// Register an object instance as a value and name it "person"
mainModule.value("person", {
    firstName: "",
    lastName: ""
}).service("personManager", PersonManager).controller("mainController", function ($scope, person, personManager) {
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
