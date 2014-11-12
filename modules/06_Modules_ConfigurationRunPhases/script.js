/// <reference path="../typings/tsd.d.ts" />
// Definition of a PersonManager object
var PersonManager = (function () {
    function PersonManager(person, separator) {
        this.personInstance = person;
        this.separator = separator;
    }
    PersonManager.prototype.getPersonFirstName = function () {
        return this.personInstance.firstName;
    };
    PersonManager.prototype.getPersonLastName = function () {
        return this.personInstance.lastName;
    };
    PersonManager.prototype.getPersonFullName = function (separator) {
        return this.personInstance.firstName + this.separator + this.personInstance.lastName;
    };
    return PersonManager;
})();
var PersonManagerProvider = (function () {
    function PersonManagerProvider() {
        this.fullNameSeparator = " ";
    }
    PersonManagerProvider.prototype.setFullNameSeparator = function (separator) {
        this.fullNameSeparator = separator;
    };
    PersonManagerProvider.prototype.$get = function (person) {
        if (!this.personManager) {
            this.personManager = new PersonManager(person, this.fullNameSeparator);
        }
        return this.personManager;
    };
    return PersonManagerProvider;
})();
//// Definition of a PersonManager object
//var PersonManager = function ()
//{
//  var fullNameSeparator = " ";
//
//  return {
//    setFullNameSeparator: function (separator)
//    {
//      fullNameSeparator = separator;
//    },
//    $get: function (person)
//    {
//      return {
//        getPersonFirstName: function ()
//        {
//          return person.firstName;
//        },
//        getPersonLastName: function ()
//        {
//          return person.lastName;
//        },
//        getPersonFullName: function ()
//        {
//          return person.firstName + fullNameSeparator + person.lastName;
//        }
//      };
//    }
//  };
//};
// Initialization of the "mainModule"
var mainModule = angular.module('mainModule', []);
// Register an object instance as a value and name it "person"
mainModule.value("person", {
    firstName: "",
    lastName: ""
}).provider("personManager", new PersonManagerProvider()).config(function (personManagerProvider) {
    personManagerProvider.setFullNameSeparator("*");
}).run(function (person) {
    person.firstName = "John";
    person.lastName = "Doe";
}).controller("mainController", function ($scope, person, personManager) {
    // Set variables on the scope to reference the "person" object instance
    // and the "personManager" service from the HTML template.
    $scope.personInstance = person;
    $scope.personManagerInstance = personManager;
});
