/// <reference path="../../../typings/tsd.d.ts" />

var mainModule:ng.IModule = angular.module('mainModule',[]);

class SelectedPeople {
  public firstName:string;
  public lastName:string;
  public isSelected:boolean;
  constructor(pe:any) {
    this.firstName = pe.firstName;
    this.lastName = pe.lastName;
    this.isSelected = pe.isSelected;
  }
}



mainModule.controller("mainController", function ($scope)
  {
    // Initialization
    $scope.areAllPeopleSelected = false;

    $scope.people = [
      {firstName: "John", lastName: "Doe"},
      {firstName: "Bob", lastName: "Smith"},
      {firstName: "Jack", lastName: "White"},
      {firstName: "Michael", lastName: "Green"}
    ];

    $scope.selectablePeople = [
      new SelectedPeople({firstName: "John", lastName: "Doe", isSelected: false}),
      new SelectedPeople({firstName: "Bob", lastName: "Smith", isSelected: false}),
      new SelectedPeople({firstName: "Jack", lastName: "White", isSelected: false}),
      new SelectedPeople({firstName: "Michael", lastName: "Green", isSelected: false})
    ];

    $scope.stringsArray = [];
    var currStringIndex = 0;

    // Utility functions
    $scope.updatePeopleSelection = function (peopleArray:Array<SelectedPeople>, selectionValue:boolean) {
      for (var i = 0; i < peopleArray.length; i++)
      {
        peopleArray[i].isSelected = selectionValue;
      }
    };

    $scope.getPersonPositionDesc = function(isFirst, isMiddle, isLast, isEven, isOdd) {
      var result = "";

      if (isFirst)
      {
        result = "(first";
      }
      else if (isMiddle)
      {
        result = "(middle";
      }
      else if (isLast)
      {
        result = "(last";
      }

      if (isEven)
      {
        result += "-even)";
      }
      else if (isOdd)
      {
        result += "-odd)";
      }

      return result;
    };

    $scope.addStringToArray = function () {
      $scope.stringsArray.push("Item " + currStringIndex);
      currStringIndex++;
    };

    $scope.removeStringFromArray = function (stringIndex) {
      if (stringIndex >= 0 && stringIndex < $scope.stringsArray.length)
      {
        $scope.stringsArray.splice(stringIndex, 1);
      }
    };
  });